package com.geoit.vumap.web.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PerfilesController {

    @GetMapping("/mi-perfil")
    public String getPerfil(Model model, Authentication auth) {
        return "mi-perfil";
    }

    @GetMapping("/perfiles")
    public String getPerfiles(Model model) {
        return "perfiles";
    }
}