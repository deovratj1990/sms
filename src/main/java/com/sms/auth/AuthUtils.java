package com.sms.auth;

import java.io.IOException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sms.Config;

@Component
public class AuthUtils {
	@Autowired
	private Config config;
	
	public Cookie getAuthCookie(HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		
		if(cookies != null) {
			for (Cookie cookie : cookies) {
				if (config.getAdminAuthCookieName().equals(cookie.getName())) {
					return cookie;
				}
			}
		}
		
		return null;
	}
	
	public boolean validateAccessToken(Cookie authCookie) {
		if (authCookie != null && !authCookie.getValue().trim().equals("")) {
			return true;
		}
		
		return false;
	}

	public boolean authorizeRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
		Cookie authCookie = getAuthCookie(request);
		
		boolean accessTokenValidated = validateAccessToken(authCookie);
		
		System.out.println("SessionManager.preHandle currentURI : " + request.getRequestURI());
		
		if(accessTokenValidated) {
			if(isAdminLoginRequest(request)) {
				response.sendRedirect(config.getAdminDashboardUrl());
				
				return false;
			} else {
				request.setAttribute(config.getAdminAuthCookieName(), authCookie.getValue());
				
				return true;
			}
		} else if(!accessTokenValidated && !isAdminLoginRequest(request)) {
			response.sendRedirect(config.getAdminLoginUrl());
			
			return false;
		}
		
		return true;
	}
	
	public boolean isAdminLoginRequest(HttpServletRequest request) {
		return request.getRequestURI().equals(config.getAdminLoginUrl());
	}
}
