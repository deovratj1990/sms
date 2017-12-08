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
import com.sms.constant.Constants;
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
		
		JsonNode countries = client.getForJson(config.getServiceUrl("/address/getCountries"));
		//JsonNode countries = client.getForJson("http://localhost:8080/address/getCountries");
		
		Map data = new HashMap();
		
		data.put(Constants.COUNTRY_LIST, countries);
		
		return render(Constants.SOCIETY_REGISTER, data);
	}
}
