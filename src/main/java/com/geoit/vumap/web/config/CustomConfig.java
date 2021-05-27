package com.geoit.vumap.web.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import lombok.Data;

@Data
@Configuration
public class CustomConfig {
    @Value("${security.api.url}")
    private String securityApiUrl;

    @Value("${users.api.url}")
    private String usersApiUrl;

    @Value("${remtys.api.url}")
    private String remtysApiUrl;

    @Value("${notifications.api.url}")
    private String notificationsApiUrl;

    
    @Value("${remtys.app.url}")
    private String remtysAppUrl;

    @Value("${security.api.basic.auth.username}")
    private String securityApiUsername;

    @Value("${security.api.basic.auth.password}")
    private String securityApiPassword;
}