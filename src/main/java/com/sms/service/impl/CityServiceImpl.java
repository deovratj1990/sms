package com.sms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.domain.City;
import com.sms.repo.CityRepo;
import com.sms.service.CityService;

@Service
public class CityServiceImpl implements CityService {

	@Autowired
	CityRepo cityRepo;
	
	@Override
	public City saveCity(City city) {
		return cityRepo.save(city);
	}

	@Override
	public List<City> getCityByStateId(Long stateId) {
		return cityRepo.findCityByStateId(stateId);		
	}
}
