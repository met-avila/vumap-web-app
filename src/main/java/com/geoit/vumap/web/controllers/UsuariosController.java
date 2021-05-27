package com.geoit.vumap.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsuariosController {
    @GetMapping("/usuarios")
    public String getUsuarios() {
        return "usuarios";
    }
}