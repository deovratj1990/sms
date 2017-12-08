package com.sms.backend.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.sms.constant.Constants;

@Controller
@RequestMapping(path = "/admin")
public class UserController extends AbstractController {

	@RequestMapping(path = "")
	public ModelAndView dashboard() {
		return render(Constants.USER_DASHBOARD);
	}

	@RequestMapping(path = "/login")
    public ModelAndView login(HttpServletRequest req, HttpServletResponse res) throws IOException {
		return render(Constants.USER_LOGIN);
	}
}
