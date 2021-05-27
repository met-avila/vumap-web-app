package com.geoit.vumap.web.models;

import java.util.Collection;

import com.geoit.vumap.web.config.CustomConfig;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import lombok.Data;

@Data
public class SessionUser extends User {
    private static final long serialVersionUID = 1L;

    private CustomConfig config; 
    private Usuario usuario;
    private String token;
    private MiMunicipio miMunicipio;

    public SessionUser(String username, String password, Collection<? extends GrantedAuthority> authorities,
            AuthData data) {
        super(username, password, authorities);
        this.usuario = data.getUsuario();
        this.token = data.getToken();
        this.config=data.getConfig();
        this.miMunicipio=data.getMiMunicipio();
    }

}