package com.sms.backend.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.sms.authentication.AuthUtils;

@Controller
@RequestMapping(path = "/admin")
public class UserController extends AbstractController {

	@Autowired
	private AuthUtils authUtils;

	@RequestMapping(path = "")
	public ModelAndView dashboard() {
		return render("dashboard");
	}

	@RequestMapping(path = "/login")
    public ModelAndView login(HttpServletRequest req, HttpServletResponse res) throws IOException {
		if(authUtils.checkJwtCookie(req.getCookies())) {
			res.sendRedirect("/admin/");
			return null;
		} else {
			return render("login");
		}
	}	
}