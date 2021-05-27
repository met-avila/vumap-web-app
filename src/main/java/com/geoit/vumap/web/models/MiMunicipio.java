package com.geoit.vumap.web.models;

import lombok.Data;

@Data
public class MiMunicipio {
    private String urlLogoGrande;
    private String urlLogoChico;
    private String urlFondoLogin;
    private String urlFondoInterno;
    private String urlBannerInterno;
    private String urlFaveIcon;

    private Settings settings;
}