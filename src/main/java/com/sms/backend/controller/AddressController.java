package com.sms.backend.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.http.client.ClientProtocolException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JsonNode;
import com.sms.net.Client;

@Controller
@RequestMapping(value="/admin/address")
public class AddressController extends AbstractController {
	@Autowired
	Client client;
	
	@RequestMapping(value="/address")
	public ModelAndView country(HttpServletRequest request) throws ClientProtocolException, IOException {
		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		JsonNode countries = client.getForJson(config.getServiceUrl("/country/getAll"));
		
		Map data = new HashMap();
		
		data.put("countryList", countries);
		
		return render("address", data);
	}
	
	@RequestMapping(path="/state")
	public ModelAndView state(HttpServletRequest request) throws ClientProtocolException, IOException {

		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		Map data = new HashMap();
		
		try{
			if(0 == Integer.parseInt(request.getParameter("countryId"))) {
		    	return new ModelAndView("redirect:/admin/address/country");
			} else {
				JsonNode country = client.getForJson(config.getServiceUrl("/country/getByCountryId?countryId=" + request.getParameter("countryId")));
				JsonNode states = client.getForJson(config.getServiceUrl("/state/getByCountryId?countryId=" + request.getParameter("countryId")));
				
				if(null == country) {
					return new ModelAndView("redirect:/admin/address/country");
				} else {
					data.put("country", country);
					data.put("stateList", states);
						
					return render("state", data);
				}
			}
		}
	    catch (NumberFormatException ex)
	    {
	    	return new ModelAndView("redirect:/admin/address/country");
	    }
	}

	@RequestMapping(path="/city")
	public ModelAndView city(HttpServletRequest request) throws ClientProtocolException, IOException {

		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		Map data = new HashMap();
		
		try{
			if(0 == Integer.parseInt(request.getParameter("stateId"))) {
		    	return new ModelAndView("redirect:/admin/address/state");
			} else {
				JsonNode state = client.getForJson(config.getServiceUrl("/state/getByStateId?stateId=" + request.getParameter("stateId")));
				JsonNode cities = client.getForJson(config.getServiceUrl("/city/getByStateId?stateId=" + request.getParameter("stateId")));
				
				if(null == state) {
					return new ModelAndView("redirect:/admin/address/state");
				} else {
					data.put("state", state);
					data.put("cityList", cities);
						
					return render("city", data);
				}
			}
		}
	    catch (NumberFormatException ex)
	    {
	    	return new ModelAndView("redirect:/admin/address/state");
	    }
	}

	@RequestMapping(path="/area")
	public ModelAndView area(HttpServletRequest request) throws ClientProtocolException, IOException {

		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		Map data = new HashMap();
		
		try{
			if(0 == Integer.parseInt(request.getParameter("cityId"))) {
		    	return new ModelAndView("redirect:/admin/address/city");
			} else {
				JsonNode city = client.getForJson(config.getServiceUrl("/city/getByCityId?cityId=" + request.getParameter("cityId")));
				JsonNode areas = client.getForJson(config.getServiceUrl("/area/getByCityId?cityId=" + request.getParameter("cityId")));
				
				if(null == city) {
					return new ModelAndView("redirect:/admin/address/city");
				} else {
					data.put("city", city);
					data.put("areaList", areas);
						
					return render("area", data);
				}
			}
		}
	    catch (NumberFormatException ex)
	    {
	    	return new ModelAndView("redirect:/admin/address/state");
	    }
	}

	@RequestMapping(path="/pincode")
	public ModelAndView pincode(HttpServletRequest request) throws ClientProtocolException, IOException {

		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		Map data = new HashMap();
		
		try{
			if(0 == Integer.parseInt(request.getParameter("areaId"))) {
		    	return new ModelAndView("redirect:/admin/address/area");
			} else {
				JsonNode area = client.getForJson(config.getServiceUrl("/area/getByAreaId?areaId=" + request.getParameter("areaId")));
				JsonNode pincodes = client.getForJson(config.getServiceUrl("/pincode/getByAreaId?areaId=" + request.getParameter("areaId")));
				
				if(null == area) {
					return new ModelAndView("redirect:/admin/address/area");
				} else {
					data.put("area", area);
					data.put("pincodeList", pincodes);
						
					return render("pincode", data);
				}
			}
		}
	    catch (NumberFormatException ex)
	    {
	    	return new ModelAndView("redirect:/admin/address/city");
	    }
	}
	
	@RequestMapping(path="/locality")
	public ModelAndView locality(HttpServletRequest request) throws ClientProtocolException, IOException {

		client.setAuthHeader(request.getAttribute(config.getAdminAuthCookieName()).toString());
		
		Map data = new HashMap();
		
		try{
			if(0 == Integer.parseInt(request.getParameter("pincodeId"))) {
		    	return new ModelAndView("redirect:/admin/address/pincode");
			} else {
				JsonNode pincode = client.getForJson(config.getServiceUrl("/pincode/getByPincodeId?pincodeId=" + request.getParameter("pincodeId")));
				JsonNode localities = client.getForJson(config.getServiceUrl("/locality/getByPincodeId?pincodeId=" + request.getParameter("pincodeId")));
				
				if(null == pincode) {
					return new ModelAndView("redirect:/admin/address/pincode");
				} else {
					data.put("pincode", pincode);
					data.put("localityList", localities);
						
					return render("locality", data);
				}
			}
		}
	    catch (NumberFormatException ex)
	    {
	    	return new ModelAndView("redirect:/admin/address/pincode");
	    }
	}
}
