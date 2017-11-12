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
public class WebController {
	
	Client client;
	
	public WebController() {
		client = new Client();
	}
	
	@RequestMapping(value = "/society")
	public ModelAndView login() throws ClientProtocolException, IOException {
		JsonNode countries = client.getForJson("http://localhost:8080/address/getCountries");
		
		ModelAndView mv = new ModelAndView(Constants.SOCIETY_REGISTER);
		mv.addObject(Constants.COUNTRY_LIST, countries);
		return mv;
	}
	
	@RequestMapping(value = "/forgotPassword")
	public String forgotPassword () {
		return "";
	}
}
