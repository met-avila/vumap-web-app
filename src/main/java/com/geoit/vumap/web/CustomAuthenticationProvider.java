package com.geoit.vumap.web;

import java.util.ArrayList;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.geoit.vumap.web.models.Perfil;
import com.geoit.vumap.web.config.CustomConfig;
import com.geoit.vumap.web.models.AuthData;
import com.geoit.vumap.web.models.MiMunicipio;
import com.geoit.vumap.web.models.SessionUser;
import com.geoit.vumap.web.models.Theme;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    Logger logger = LoggerFactory.getLogger(CustomAuthenticationProvider.class);

    @Autowired
    private CustomConfig config;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String name = authentication.getName();
        String password = authentication.getCredentials().toString();
        AuthData authData = auth(name, password);
        authData.setConfig(config);
        SessionUser sessionUser = new SessionUser(name, "null", new ArrayList<>(), authData);
        return new UsernamePasswordAuthenticationToken(sessionUser, null, new ArrayList<>());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

    private AuthData auth(String username, String password) {
        String url = config.getSecurityApiUrl() + "/auth";

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setBasicAuth(username, password);

            MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
            map.add("du", true);

            HttpEntity<?> request = new HttpEntity<>(map, headers);

            ResponseEntity<AuthData> res = new RestTemplate().exchange(url, HttpMethod.POST, request, AuthData.class);

            AuthData sesionUser = res.getBody();

            url = config.getUsersApiUrl() + "/perfiles/" + sesionUser.getUsuario().getPerfil().getIdPerfil();
            headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + sesionUser.getToken());
            request = new HttpEntity<>(headers);

            ResponseEntity<Perfil> resPerfil = new RestTemplate().exchange(url, HttpMethod.GET, request, Perfil.class);
            sesionUser.getUsuario().setPerfil(resPerfil.getBody());

            url = config.getRemtysApiUrl() + "/mi-municipio";
            headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + sesionUser.getToken());
            request = new HttpEntity<>(headers);
            ResponseEntity<MiMunicipio> resMiM = new RestTemplate().exchange(url, HttpMethod.GET, request,
                    MiMunicipio.class);
            sesionUser.setMiMunicipio(resMiM.getBody());

            MiMunicipio mm = sesionUser.getMiMunicipio();

            if (mm.getSettings() != null && mm.getSettings().getTheme() != null) {
                ObjectMapper objectMapper = new ObjectMapper();
                Theme theme = null;
                try {
                    theme = objectMapper.readValue(mm.getSettings().getTheme(), Theme.class);
                } catch (Exception e) {
                }
                mm.getSettings().setThemeSettings(theme);
            }
            return sesionUser;

        } catch (RestClientException e) {
            logger.error(e.getMessage(), e);
            if (e instanceof HttpClientErrorException)
                throw new BadCredentialsException("BAD_CREDENTIALS_EXCEPTION");
            else if (e instanceof ResourceAccessException)
                throw new AuthenticationServiceException("RESOURCE_ACCESS_EXCEPTION");
            else
                throw new RuntimeException("EXCEPTION");
        }
    }
}