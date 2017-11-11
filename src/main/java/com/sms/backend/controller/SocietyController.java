package com.sms.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.sms.constants.Constants;
import com.sms.service.CountryService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "society")
public class SocietyController {
	
	@Autowired
	private CountryService countryService;
	
	@RequestMapping(value = "/registration")
	public ModelAndView registartion() {
		ModelAndView mv = new ModelAndView(Constants.SOCIETY_REGISTER);
		mv.addObject(Constants.COUNRTY_LIST, countryService.getCountries());
		return mv;
	}
	

}
