package com.sms.authentication;

import javax.servlet.http.Cookie;

import org.springframework.stereotype.Component;

@Component
public class AuthUtils {
	public boolean checkJwtCookie(Cookie[] cookies) {
		for (Cookie c : cookies) {
			if ("jwt".equals(c.getName())) {
				return true;
			}
		}
		return false;
	}

}
