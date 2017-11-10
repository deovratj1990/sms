package com.sms.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.sms.domain.State;

public interface StateRepo extends CrudRepository<State, Long>{
 
	public List<State> findByCountryId(Long id);
	
}
