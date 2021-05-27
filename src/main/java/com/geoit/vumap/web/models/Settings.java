package com.geoit.vumap.web.models;

import lombok.Data;

@Data
public class Settings {
    private int id;
    private String theme;
    private Theme themeSettings;
}