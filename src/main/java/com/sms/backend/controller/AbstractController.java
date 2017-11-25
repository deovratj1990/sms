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
		
		data.put("controllerName", controllerName);
		data.put("viewName", viewName);
		data.put("serviceProtocol", config.getServiceProtocol());
		data.put("serviceHost", config.getServiceHost());
		data.put("servicePort", config.getServicePort());
		data.put("serviceBaseUrl", config.getServiceUrl(""));
		
		ModelAndView mv = new ModelAndView("common/html");
		
		mv.addAllObjects(data);
		
		return mv;
	}
	
	public ModelAndView render(String viewName) {
		return render(viewName, new HashMap<String, String>());
	}

}
