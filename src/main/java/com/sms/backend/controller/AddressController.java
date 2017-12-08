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
import com.sms.constant.Constants;
import com.sms.net.Client;

@Controller
@RequestMapping(value="/admin/address")
public class AddressController extends AbstractController {
	@Autowired
	Client client;
	
	@RequestMapping(value="/country")
	public ModelAndView country(HttpServletRequest request) throws ClientProtocolException, IOException {
		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		JsonNode countries = client.getForJson(config.getServiceUrl("/country/getAll"));
		
		Map data = new HashMap();
		
		data.put(Constants.COUNTRY_LIST, countries);
		
		return render(Constants.COUNTRY, data);
	}
	
	@RequestMapping(path="/state")
	public ModelAndView state(HttpServletRequest request) throws ClientProtocolException, IOException {
		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		JsonNode countries = client.getForJson(config.getServiceUrl("/country/getAll"));
		JsonNode states = client.getForJson(config.getServiceUrl("/state/getAll"));
		
		Map data = new HashMap();
		
		data.put(Constants.COUNTRY_LIST, countries);
		data.put(Constants.STATE_LIST, states);
		
		return render(Constants.STATE, data);
	}

}
