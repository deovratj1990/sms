package com.sms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.domain.State;
import com.sms.repo.StateRepo;
import com.sms.service.StateService;

@Service
public class StateServiceImpl implements StateService {

	@Autowired
	private StateRepo stateRepo; 
	
	@Override
	public List<State> getStateByCountryId(Long id) {
		return stateRepo.findByCountryId(id);
	}

	@Override
	public State saveState(State state) {
		return stateRepo.save(state);
	}

}
