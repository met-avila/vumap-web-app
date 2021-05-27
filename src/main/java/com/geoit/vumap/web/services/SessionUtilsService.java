package com.geoit.vumap.web.services;

import java.util.Enumeration;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.context.SecurityContextHolder;

public class SessionUtilsService {
    public static void logout(HttpServletRequest request) {
        SecurityContextHolder.getContext().setAuthentication(null);
        SecurityContextHolder.clearContext();
        HttpSession hs = request.getSession();
        Enumeration<String>  e = hs.getAttributeNames();
        while (e.hasMoreElements()) {
            String attr = e.nextElement();
            hs.setAttribute(attr, null);
        }
        removeCookies(request);
        hs.invalidate();
    }
    public static void removeCookies(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (int i = 0; i < cookies.length; i++) {
                cookies[i].setMaxAge(0);
            }
        }
    }
}