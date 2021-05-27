package com.geoit.vumap.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class RemtysController {

    @GetMapping("/configuracion")
    public String getConfiguracion() {
        return "configuracion";
    }

    @GetMapping("/flujo")
    public String getFlujo() {
        return "ts-flujo";
    }

    @GetMapping("/categorias")
    public String getCategorias() {
        return "categorias";
    }

    @GetMapping("/mi-municipio")
    public String getMiMunicipio() {
        return "mi-municipio";
    }

    @GetMapping("/ubicaciones")
    public String getUbicaciones() {
        return "ubicaciones";
    }

    @GetMapping("/diseno-general")
    public String getDisenoGeneral() {
        return "diseno-general";
    }

    @GetMapping("/tramites-servicios")
    public String getTramiteServicio() {
        return "tramites-servicios";
    }

    @GetMapping("/tramites-servicios/crear")
    public String getTramiteServicioCrear() {
        return "tramite-servicio-crear";
    }

    @GetMapping("/tramites-servicios/{idTramiteServicio}")
    public String getTramiteServicioGestion(Model model, @PathVariable Integer idTramiteServicio) {
        model.addAttribute("ts", idTramiteServicio);
        return "tramite-servicio";
    }

    @GetMapping("/tramites-servicios/{idTramiteServicio}/flujo")
    public String getTramiteServicioFlujo(Model model, @PathVariable Integer idTramiteServicio) {
        model.addAttribute("ts", idTramiteServicio);
        return "ts-flujo";
    }

    @GetMapping("/recursos")
    public String getRecursos() {
        return "recursos";
    }

    @GetMapping("/estructura-municipal")
    public String getEstructuraMunicipal() {
        return "estructura-municipal";
    }

    @GetMapping("/flujo-interno")
    public String getFlujoInternoTS() {
        return "flujo-interno";
    }

    @GetMapping("/estructura-municipal-dx")
    public String getEstructuraMunicipalDx() {
        return "estructura-municipal-dx";
    }

}