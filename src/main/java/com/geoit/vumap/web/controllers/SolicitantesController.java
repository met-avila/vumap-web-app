package com.geoit.vumap.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SolicitantesController {

    @GetMapping("/solicitantes")
    public String getPerfil() {
        return "solicitantes";
    }
}