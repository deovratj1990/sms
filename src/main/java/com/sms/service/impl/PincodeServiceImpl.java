package com.sms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.domain.Pincode;
import com.sms.repo.PincodeRepo;
import com.sms.service.PincodeService;

@Service
public class PincodeServiceImpl implements PincodeService {

	@Autowired
	PincodeRepo pincodeRepo;
	
	@Override
	public Pincode savePincode(Pincode pincode) {
		
		return pincodeRepo.save(pincode);
	}

	@Override
	public List<Pincode> getPincodeByCityId(Long cityId) {

		return pincodeRepo.findPincodeByCityId(cityId);

	}

}
