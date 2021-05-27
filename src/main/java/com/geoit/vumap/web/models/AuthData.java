package com.geoit.vumap.web.models;

import com.geoit.vumap.web.config.CustomConfig;

import lombok.Data;

@Data
public class AuthData {
    private Usuario usuario;
    private String token;
    private CustomConfig config;
    private MiMunicipio miMunicipio;
}