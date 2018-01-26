package com.sms.backend.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.http.client.ClientProtocolException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JsonNode;
import com.sms.net.Client;

@Controller
@RequestMapping(value="/admin/address")
public class AddressController extends AbstractController {
	@Autowired
	Client client;
	
	@RequestMapping(value="/address")
	public ModelAndView country(HttpServletRequest request) throws ClientProtocolException, IOException {
		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		JsonNode countries = client.getForJson(config.getServiceUrl("/country/getAll"));
		
		Map data = new HashMap();
		
		data.put("countryList", countries);
		
		return render("address", data);
	}
}
