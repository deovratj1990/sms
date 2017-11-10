package com.sms.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	@RequestMapping(value = "/test", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<String> home(@RequestBody String req) {
		System.out.print(req + " aaya");
		ResponseEntity<String> responseEntity = new ResponseEntity<>("my response body",
                HttpStatus.OK);
		return responseEntity;
    }
	
}
