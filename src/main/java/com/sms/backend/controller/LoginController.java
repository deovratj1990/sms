package com.sms.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.sms.constants.Constants;

@RestController
@RequestMapping(value="/")
public class LoginController {

	@RequestMapping(value = "/admin")
    public ModelAndView adminLogin() {
		ModelAndView mv = new ModelAndView(Constants.LOGIN);
		return mv;
    }
	
}
