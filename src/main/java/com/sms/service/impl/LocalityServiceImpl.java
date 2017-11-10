package com.sms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.domain.Locality;
import com.sms.repo.LocalityRepo;
import com.sms.service.LocalityService;

@Service
public class LocalityServiceImpl implements LocalityService {

	@Autowired
	LocalityRepo localityRepo;
	
	@Override
	public Locality saveLocality(Locality locality) {
		
		return localityRepo.save(locality);
		
	}

	@Override
	public List<Locality> getLocalityByPincodeId(Long localityId) {
		
		return localityRepo.findLocalityByPincodeId(localityId);
	
	}
	
	

}
