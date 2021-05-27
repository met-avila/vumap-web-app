package com.geoit.vumap.web.controllers;

import com.geoit.vumap.web.config.CustomConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PublicController {

    @Autowired
    private CustomConfig config;

    @GetMapping(value = "/p/consulta")
    public String getConsulta(Model model) {
        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        return "public/consulta";
    }

    @GetMapping(value = "/p/consultav2")
    public String getConsultaV2(Model model) {
        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        return "public/consultav2";
    }

    @GetMapping(value = "/p/error")
    public String getError(Model model) {
        return "public/error";
    }

    @GetMapping(value = "/p/tramites-servicios")
    public String getTramiteServicio(@RequestParam(name = "u") String uuid, Model model) {
        model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
        model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
        return "public/tramite-servicio";
    }

}