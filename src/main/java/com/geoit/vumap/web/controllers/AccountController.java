package com.geoit.vumap.web.controllers;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;

import javax.servlet.http.HttpServletRequest;

import com.geoit.vumap.web.config.CustomConfig;
import com.geoit.vumap.web.models.UsuarioConfirmacionToken;
import com.geoit.vumap.web.services.SessionUtilsService;
import com.geoit.vumap.web.services.SettingsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@Controller
public class AccountController {

    @Autowired
    private SettingsService settingsService;

    @Autowired
    private CustomConfig config;

    @GetMapping("/crear-cuenta")
    public String getUsuariosCrearCuenta(@RequestParam(name = "t", required = false) String token, Model model) {
        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        model.addAttribute("settings", settingsService.obtenerSettings());

        if (token == null || token.isEmpty())
            return "error-crear-cuenta";

        String url = config.getSecurityApiUrl() + "/jwt/is-valid?t=" + token;
        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(config.getSecurityApiUsername(), config.getSecurityApiPassword());
        HttpEntity<?> request = new HttpEntity<>(headers);
        ResponseEntity<String> res = new RestTemplate().exchange(url, HttpMethod.GET, request, String.class);

        if (res.getStatusCode() == HttpStatus.OK) {
            if (res.getBody().equals("true")) {
                model.addAttribute("token", token);
                return "crear-cuenta";
            }
        }
        return "crear-cuenta-no-token";
    }

    @PostMapping(value = "/crear-cuenta")
    public String postCrearCuenta(@RequestParam(name = "t", required = true) String token,
            @RequestParam(name = "p", required = true) String password,
            @RequestParam(name = "pc", required = true) String passwordConfirm, Model model) {

        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        model.addAttribute("settings", settingsService.obtenerSettings());

        if (!password.equals(passwordConfirm)) {
            model.addAttribute("error", "El password no es el mismo");
            return "crear-cuenta";
        }

        String url = config.getSecurityApiUrl() + "/account/" + token;
        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(config.getSecurityApiUsername(), config.getSecurityApiPassword());

        MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
        map.add("p", password);
        HttpEntity<?> request = new HttpEntity<>(map, headers);

        ResponseEntity<String> res = new RestTemplate().exchange(url, HttpMethod.POST, request, String.class);

        if (res.getStatusCode() == HttpStatus.OK) {
            return "crear-cuenta-success";
        } else {
            model.addAttribute("error", "No se puede establecer la contraseña, intente más tarde.");
            return "crear-cuenta";
        }
    }

    @GetMapping("/recuperar-password")
    public String getRecuperarPassword(Model model, Authentication auth, HttpServletRequest httpRequest) {
        if (auth != null) {
            SessionUtilsService.logout(httpRequest);
        }
        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        model.addAttribute("settings", settingsService.obtenerSettings());

        return "recuperar-password";
    }

    @Value("classpath:/static/templates/recuperar-password.html")
    private Resource resource;

    @PostMapping(value = "/recuperar-password")
    public String postRecuperarPassword(@RequestParam(name = "email", required = true) String email, Model model) {

        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        model.addAttribute("settings", settingsService.obtenerSettings());

        String url = config.getSecurityApiUrl() + "/jwt/uct/cc";
        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(config.getSecurityApiUsername(), config.getSecurityApiPassword());

        MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
        map.add("nuc", email);
        HttpEntity<?> request = new HttpEntity<>(map, headers);

        try {
            ResponseEntity<UsuarioConfirmacionToken> res = new RestTemplate().exchange(url, HttpMethod.POST, request,
                    UsuarioConfirmacionToken.class);
            UsuarioConfirmacionToken uct = res.getBody();
            url = config.getRemtysAppUrl() + "/reset-password?c=" + uct.getTokenConfirmacion();
            String template = asString(resource);
            template = template.replace("$Sistema", "Remtys");
            template = template.replace("$Url", url);

            url = config.getNotificationsApiUrl() + "/basic-auth/email";
            url += "?to=" + email + "&subject=Recuperación de contraseña Remtys&fromTitle=REMTYS&async=true";

            request = new HttpEntity<>(template, headers);
            new RestTemplate().exchange(url, HttpMethod.POST, request, String.class);

            return "recuperar-password-success";
        } catch (Exception e) {
            model.addAttribute("error", "El usuario no existe");
            model.addAttribute("email", email);

            model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
            model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
            model.addAttribute("settings", settingsService.obtenerSettings());
            return "recuperar-password";
        }
    }

    public static String asString(Resource resource) {
        try (Reader reader = new InputStreamReader(resource.getInputStream(), "UTF-8")) {
            return FileCopyUtils.copyToString(reader);
        } catch (IOException e) {
            return "";
        }
    }

    @GetMapping("/reset-password")
    public String getResetPassword(@RequestParam(name = "c", required = false) String token, Model model) {

        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        model.addAttribute("settings", settingsService.obtenerSettings());

        String url = config.getSecurityApiUrl() + "/jwt/is-valid?t=" + token;
        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(config.getSecurityApiUsername(), config.getSecurityApiPassword());
        HttpEntity<?> request = new HttpEntity<>(headers);
        ResponseEntity<String> res = new RestTemplate().exchange(url, HttpMethod.GET, request, String.class);

        if (res.getStatusCode() == HttpStatus.OK) {
            if (res.getBody().equals("true")) {
                model.addAttribute("token", token);
                return "reset-password";
            }
        }

        return "reset-password-no-token";
    }

    @PostMapping(value = "/reset-password")
    public String postResetPassword(@RequestParam(name = "t", required = true) String token,
            @RequestParam(name = "p", required = true) String password,
            @RequestParam(name = "pc", required = true) String passwordConfirm, Model model) {

        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        model.addAttribute("settings", settingsService.obtenerSettings());

        if (!password.equals(passwordConfirm)) {
            model.addAttribute("error", "El password no es el mismo");
            return "reset-password";
        }

        String url = config.getSecurityApiUrl() + "/account/" + token;
        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(config.getSecurityApiUsername(), config.getSecurityApiPassword());

        MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
        map.add("p", password);
        HttpEntity<?> request = new HttpEntity<>(map, headers);

        ResponseEntity<String> res = new RestTemplate().exchange(url, HttpMethod.POST, request, String.class);

        if (res.getStatusCode() == HttpStatus.OK) {
            return "reset-password-success";
        } else {
            model.addAttribute("error", "No se puede establecer la contraseña, intente más tarde.");
            return "reset-password";
        }
    }
}
