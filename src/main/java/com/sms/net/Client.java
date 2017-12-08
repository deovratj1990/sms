package com.sms.net;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.impl.client.HttpClients;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class Client {
	public static final String RESPONSE_TYPE_PLAIN = "text/plain";
	public static final String RESPONSE_TYPE_JSON = "application/json";
	
	HttpClient httpClient;
	
	Map<String, String> clientHeaders;
	
	public Client() {
		httpClient = HttpClients.createDefault();
		clientHeaders = new HashMap<String, String>();
	}
	
	public HttpClient getHttpClient() {
		return httpClient;
	}
	
	private void setHeaders(HttpRequestBase request, Map<String, String> headers) {
		if(headers != null) {
			for(Map.Entry<String, String> header : headers.entrySet()) {
				request.setHeader(header.getKey(), header.getValue());
			}
		}
	}
	
	private String execute(HttpRequestBase request, Map<String, String> headers) throws IOException {
		setHeaders(request, headers);
		
		setHeaders(request, clientHeaders);
		
		HttpResponse response = httpClient.execute(request);
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
		
		StringBuilder stringResponse = new StringBuilder();
		String line;
		
		while((line = reader.readLine()) != null) {
			stringResponse.append(line);
		}
		
		return stringResponse.toString();
	}
	
	private JsonNode parseJsonResponse(String response) throws IOException, JsonProcessingException {
		return new ObjectMapper().readTree(response);
	}
	
	public void setHeader(String name, String value) {
		if(name != null && value != null) {
			clientHeaders.put(name.trim(), value);
		}
	}
	
	public void removeHeader(String name) {
		if(name != null) {
			clientHeaders.remove(name.trim());
		}
	}
	
	public void setAuthHeader(String value) {
		if(value != null) {
			setHeader("Authorization", "Bearer " + value);
		}
	}
	
	public String get(String url, Map<String, String> headers) throws IOException {
		HttpGet request = new HttpGet(url);
		
		return execute(request, headers);
	}
	
	public String get(String url) throws IOException {
		return get(url, null);
	}
	
	public JsonNode getForJson(String url, Map<String, String> headers) throws IOException {
		return parseJsonResponse(get(url, headers));
	}
	
	public JsonNode getForJson(String url) throws IOException {
		return getForJson(url, null);
	}
}
