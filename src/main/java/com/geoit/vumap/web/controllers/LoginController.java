package com.geoit.vumap.web.controllers;

import java.security.Principal;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.geoit.vumap.web.config.CustomConfig;
import com.geoit.vumap.web.services.SettingsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.WebAttributes;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
  @Autowired
  private MessageSource messageSource;

  @Autowired
  private CustomConfig config;

  @Autowired
  private SettingsService settingsService;

  @GetMapping("/login")
  public String login(HttpServletRequest request, Model model, Locale locale, Principal principal) {
    model.addAttribute("remtysApiUrl", config.getRemtysApiUrl());
    model.addAttribute("remtysAppUrl", config.getRemtysAppUrl());
    model.addAttribute("settings", settingsService.obtenerSettings());

    if (principal != null)
      return "redirect:/mi-perfil";
    String errorMessage = null;
    HttpSession session = request.getSession(false);
    if (session != null) {
      AuthenticationException ex = (AuthenticationException) session
          .getAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
      if (ex != null) {
        errorMessage = ex.getMessage();
        if (errorMessage.equals("BAD_CREDENTIALS_EXCEPTION"))
          errorMessage = messageSource.getMessage("Login.BadCedentials", null, locale);
        else if (errorMessage.equals("RESOURCE_ACCESS_EXCEPTION"))
          errorMessage = messageSource.getMessage("SecurityApi.AccessError", null, locale);
        else
          errorMessage = messageSource.getMessage("InternalServerError", null, locale);
      }
    }

    model.addAttribute("error", errorMessage);
    return "login";
  }
}