package com.sms.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.sms.constants.Constants;
import com.sms.service.CountryService;

@Controller
public class WebController {
	
	@Autowired
	private CountryService countryService;
	
	@RequestMapping(value = "/society")
	public ModelAndView login() {
		ModelAndView mv = new ModelAndView(Constants.SOCIETY_REGISTER);
		mv.addObject(Constants.COUNRTY_LIST, countryService.getCountries());
		return mv;
	}
	
	@RequestMapping(value = "/forgotPassword")
	public String forgotPassword () {
		return "";
	}
	
	@RequestMapping(value="address/country")
	public ModelAndView country() {
		ModelAndView mv = new ModelAndView(Constants.COUNTRY);
		mv.addObject(Constants.COUNRTY_LIST, countryService.getCountries());
		return mv;
	}
}
