package com.sms.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.sms.constants.Constants;

@RestController
@RequestMapping(value="/admin/user")
public class UserController {

	@RequestMapping(value = "/login")
    public ModelAndView login() {
		ModelAndView mv = new ModelAndView(Constants.USER_LOGIN);
		return mv;
    }	
}
