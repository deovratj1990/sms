package com.sms.backend.controller;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JsonNode;
import com.sms.constants.Constants;
import com.sms.net.Client;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "society")
public class SocietyController {
	Client client;
	
	public SocietyController() {
		client = new Client();
	}
	
	@RequestMapping(value = "/registration")
	public ModelAndView registartion() throws ClientProtocolException, IOException {
		JsonNode countries = client.getForJson("http://localhost:8080/address/getCountries");
		
		ModelAndView mv = new ModelAndView(Constants.SOCIETY_REGISTER);
		mv.addObject(Constants.COUNTRY_LIST, countries);
		return mv;
	}
}
