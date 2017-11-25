package com.sms.backend.controller;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JsonNode;
import com.sms.constants.Constants;
import com.sms.net.Client;

@Controller
@RequestMapping(value="/admin/address")
public class AddressController extends AbstractController {
	
	Client client;
	
	public AddressController() {
		client = new Client();
	}
	
	@RequestMapping(value="/country")
	public ModelAndView country() throws ClientProtocolException, IOException {
		JsonNode countries = client.getForJson(config.getServiceUrl("/country/getCountries"));
		
		ModelAndView mv = new ModelAndView(Constants.COUNTRY);
		mv.addObject(Constants.COUNTRY_LIST, countries);
		
		return mv;
	}
	
	@RequestMapping(path="/state")
	public ModelAndView state() throws ClientProtocolException, IOException {
		JsonNode countries = client.getForJson(config.getServiceUrl("/country/getCountries"));
		JsonNode states = client.getForJson(config.getServiceUrl("/state/getAllStates"));
		
		ModelAndView mv = new ModelAndView(Constants.STATE);
		mv.addObject(Constants.COUNTRY_LIST, countries);
		mv.addObject(Constants.STATE_LIST, states);
		return mv;
	}

}
