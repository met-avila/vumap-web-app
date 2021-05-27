package com.geoit.vumap.web.services;

import com.geoit.vumap.web.config.CustomConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SettingsService {
    @Autowired
    private CustomConfig config;

    public String obtenerSettings() {
        String settings = new RestTemplate().getForObject(config.getRemtysApiUrl() + "/settings", String.class);
        return settings;
    }
}
