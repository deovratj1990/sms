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
	
	public String getServiceProtocol() {
		return serviceProtocol;
	}
	
	public String getServiceHost() {
		return serviceHost;
	}

	public String getServicePort() {
		return servicePort;
	}
	
	public String getServiceUrl(String url) {
		return getServiceProtocol() + "://" + getServiceHost() + ":" + getServicePort() + url;
	}
}
