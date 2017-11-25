package com.sms.interceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.sms.authentication.AuthUtils;

public class SessionManager implements HandlerInterceptor{

	public static final String REDIRECT_URI = "/admin/login";
	
	@Autowired
	private AuthUtils authUtils;
	
    @Override
    public boolean preHandle(HttpServletRequest request,
            HttpServletResponse response, Object handler) throws Exception {

    	String currentURI = request.getRequestURI();
    	System.out.println("SessionManager.preHandle currentURI : " + currentURI);
    	
    	Cookie[] cookies = request.getCookies();
    	
        boolean permission = authUtils.checkJwtCookie(cookies);		
        //checkPermission(authHeader, request, response);
        if(permission) {
            return true;
        }
        else if(!REDIRECT_URI.equals(currentURI)){
        	response.sendRedirect(REDIRECT_URI);
        }
        return true;
    }

	@Override
    public void postHandle(HttpServletRequest request,
            HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request,
            HttpServletResponse response, Object handler, Exception ex)
            throws Exception {

    }
    
}