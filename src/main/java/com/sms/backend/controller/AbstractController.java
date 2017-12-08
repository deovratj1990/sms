package com.sms.backend.controller;

import java.beans.Introspector;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;

import com.sms.Config;

public abstract class AbstractController {
	
	@Autowired
	protected Config config;
	
	public ModelAndView render(String viewName, Map data) {
		
		String controllerName =  Introspector.decapitalize(getClass().getSimpleName().replaceFirst("Controller", ""));
		
		data.put("CONTROLLER_NAME", controllerName);
		data.put("VIEW_NAME", viewName);
		data.put("SERVICE_PROTOCOL", config.getServiceProtocol());
		data.put("SERVICE_HOST", config.getServiceHost());
		data.put("SERVICE_PORT", config.getServicePort());
		data.put("SERVICE_BASE_URL", config.getServiceBaseUrl());
		data.put("ADMIN_AUTH_COOKIE_NAME", config.getAdminAuthCookieName());
		data.put("ADMIN_LOGIN_URL", config.getAdminLoginUrl());
		data.put("ADMIN_DASHBOARD_URL", config.getAdminDashboardUrl());
		
		ModelAndView mv = new ModelAndView("common/html");
		
		mv.addAllObjects(data);
		
		return mv;
	}
	
	public ModelAndView render(String viewName) {
		return render(viewName, new HashMap<String, String>());
	}

}
