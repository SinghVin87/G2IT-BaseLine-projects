package com.g2it.cms.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.g2it.cms.utils.AuthenticationInterceptor;

@Configuration
public abstract class InterceptorConfig implements WebMvcConfigurer{

	@Autowired
	AuthenticationInterceptor authenticationFilter;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(authenticationFilter);
	}
}
