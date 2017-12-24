package com.sms.backend.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.http.client.ClientProtocolException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JsonNode;
import com.sms.net.Client;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/admin/society")
public class SocietyController extends AbstractController {
	@Autowired
	Client client;
	
	@RequestMapping(value = "/registration")
	public ModelAndView registartion(HttpServletRequest request) throws ClientProtocolException, IOException {
		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		JsonNode countries = client.getForJson(config.getServiceUrl("/country/getAll"));
		
		Map data = new HashMap();
		
		data.put("countryList", countries);
		
		return render("register", data);
	}

	@RequestMapping(path="/subscription")
	public ModelAndView listing(HttpServletRequest request) throws ClientProtocolException, IOException {
		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		JsonNode societies = client.getForJson(config.getServiceUrl("/society/getAllSocietySubscription"));
		
		Map data = new HashMap();
		
		data.put("societyList", societies);
		
		return render("report", data);
	}
}
