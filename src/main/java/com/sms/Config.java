package com.sms;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Config {
	
	@Value("${com.sms.service.protocol:http}")
	private String serviceProtocol;
	
	@Value("${com.sms.service.host:localhost}")
	private String serviceHost;
	
	@Value("${com.sms.service.port:8080}")
	private String servicePort;
	
	@Value("${com.sms.admin.authCookieName:accessToken}")
	private String adminAuthCookieName;
	
	@Value("${com.sms.admin.loginUrl:/admin/login}")
	private String adminLoginUrl;
	
	@Value("${com.sms.admin.dashboardUrl:/admin}")
	private String adminDashboardUrl;
	
	public String getServiceProtocol() {
		return serviceProtocol;
	}
	
	public String getServiceHost() {
		return serviceHost;
	}

	public String getServicePort() {
		return servicePort;
	}
	
	public String getServiceBaseUrl() {
		return getServiceProtocol() + "://" + getServiceHost() + ":" + getServicePort();
	}
	
	public String getServiceUrl(String url) {
		return getServiceBaseUrl() + url;
	}
	
	public String getAdminAuthCookieName() {
		return adminAuthCookieName;
	}
	
	public String getAdminLoginUrl() {
		return adminLoginUrl;
	}
	
	public String getAdminDashboardUrl() {
		return adminDashboardUrl;
	}
}
