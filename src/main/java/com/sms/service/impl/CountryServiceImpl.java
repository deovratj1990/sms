package com.sms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.domain.Country;
import com.sms.repo.CountryRepo;
import com.sms.service.CountryService;

@Service
public class CountryServiceImpl implements CountryService {

	
	@Autowired
	CountryRepo countryRepo;
	
	@Override
	public List<Country> getCountries() {
		List<Country> list = (List<Country>) countryRepo.findAll();
		return list;
	}

	@Override
	public Country addCountry(Country country) {
		if(null == countryRepo.findByCountryName(country.getCountryName())) {
			Country savedCountry = countryRepo.save(country);
			return savedCountry;
		} else {
			return null;
		}
	}

	@Override
	public Country getCountryByCountryId(Long countryId) {
		return countryRepo.findCountryByCountryId(countryId);
	}

	@Override
	public Country editCountry(Country country) {
		
		return null;
	}
}
