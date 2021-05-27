package com.geoit.vumap.web.controllers;

import com.geoit.vumap.web.models.SessionUser;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String home(Model model, Authentication auth) {
        SessionUser sesionUser = (SessionUser) auth.getPrincipal();
        model.addAttribute("SesionUser", sesionUser);
        return "redirect:/mi-perfil";
    }
}