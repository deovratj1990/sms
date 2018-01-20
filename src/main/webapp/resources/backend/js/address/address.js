var countryEdit = false;
var countryEditId = 0;

var stateEdit = false;
var stateEditId = 0;

var cityEdit = false;
var cityEditId = 0;

var areaEdit = false;
var areaEditId = 0;

var pincodeEdit = false;
var pincodeEditId = 0;

var localityEdit = false;
var localityEditId = 0;

//CAROUSEL FORM DATA CODE//----------------------------------------------------------------------
$("body").on("click", "span.carousel-next", function (){
	console.log($(this));

	var getCarouselContainer = $(this).attr("data-callCarousel");
	var callerId = $(this).attr("data-callerId");
	var callerName = $(this).attr("data-callerName");
	
	if("state" == getCarouselContainer) {
		$('#sliderContainer').carousel('next');
		stateEdit = false;
		stateEditId = 0;
		
		$("#stateForm").trigger("reset");
		
		preValidate();

		countryId = callerId;
		$("#countryId").val(countryId);
		$("#stateListHeader").html(callerName);
		ajax('/state/getByCountryId?countryId='+countryId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.OK == jqXHR.status) {
				var tableContent="";		
				for(var key in dataOrError) {
					tableContent +=	'<tr id="state_' + dataOrError[key].stateId + '">' +
										'<td>' + dataOrError[key].stateName + '</td>' + 
										'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
										'title="Edit State" ' +
										'onclick="getStateEdit(\'' + dataOrError[key].stateId + '\')">' +
										'</span> ' +
										'<span class="carousel-next glyphicon glyphicon-list" ' +
										'data-callCarousel="city" ' +
										'data-callerId="' + dataOrError[key].stateId + '"  ' +
										'data-callerName="' + dataOrError[key].stateName + '" title="View Cities"></span> ' +
										'</td>' +
									'</tr>';
				}
				$("#stateListBody").html(tableContent);
			} else if(HttpStatus.NO_CONTENT == jqXHR.status) {
				var tableContent="";		
				$("#stateListBody").html(tableContent);
			} else {
				alert("Something went wrong. Please try again later!");
				return false;
			}
		}, 'GET');	
	} else if("city" == getCarouselContainer) {
		$('#sliderContainer').carousel('next');
		cityEdit = false;
		cityEditId = 0;
		
		$("#cityForm").trigger("reset");
		
		preValidate();

		stateId = callerId;
		$("#stateId").val(stateId);
		$("#cityListHeader").html(callerName);
		
		ajax('/city/getByStateId?stateId='+stateId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.OK == jqXHR.status) {
				var tableContent="";		
				for(var key in dataOrError) {
					tableContent +=	'<tr id="city_' + dataOrError[key].cityId + '">' +
										'<td>' + dataOrError[key].cityName + '</td>' + 
										'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
										'title="Edit City" ' +
										'onclick="getCityEdit(\'' + dataOrError[key].cityId + '\')">' +
										'</span> ' +
										 '<span class="carousel-next glyphicon glyphicon-list" ' +
										 'data-callCarousel="area" ' +
										 'data-callerId="' + dataOrError[key].cityId + '"  ' +
										 'data-callerName="' + dataOrError[key].cityName + '" title="View Areas"></span> ' +
										'</td>' +
									'</tr>';
				}
				$("#cityListBody").html(tableContent);
			} else if(HttpStatus.NO_CONTENT == jqXHR.status) {
				var tableContent="";		
				$("#cityListBody").html(tableContent);
			} else {
				alert("Something went wrong. Please try again later!");
				return false;
			}
		}, 'GET');	
	} else if("area" == getCarouselContainer) {
		$('#sliderContainer').carousel('next');
		areaEdit = false;
		areaEditId = 0;
		
		$("#areaForm").trigger("reset");
		
		preValidate();

		cityId = callerId;
		$("#cityId").val(cityId);
		$("#areaListHeader").html(callerName);
		
		ajax('/area/getByCityId?cityId='+cityId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.OK == jqXHR.status) {
				var tableContent="";		
				for(var key in dataOrError) {
					tableContent +=	'<tr id="area_' + dataOrError[key].areaId + '">' +
										'<td>' + dataOrError[key].areaName + '</td>' + 
										'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
										'title="Edit Area" ' +
										'onclick="getAreaEdit(\'' + dataOrError[key].areaId + '\')">' +
										'</span> ' +
										 '<span class="carousel-next glyphicon glyphicon-list" ' +
										 'data-callCarousel="pincode" ' +
										 'data-callerId="' + dataOrError[key].areaId + '"  ' +
										 'data-callerName="' + dataOrError[key].areaName + '" title="View Pincodes"></span> ' +
										'</td>' +
									'</tr>';
				}
				$("#areaListBody").html(tableContent);
			} else if(HttpStatus.NO_CONTENT == jqXHR.status) {
				var tableContent="";		
				$("#areaListBody").html(tableContent);
			} else {
				alert("Something went wrong. Please try again later!");
				return false;
			}
		}, 'GET');	
	} else if("pincode" == getCarouselContainer) {
		$('#sliderContainer').carousel('next');
		pincodeEdit = false;
		pincodeEditId = 0;
		
		$("#pincodeForm").trigger("reset");
		
		preValidate();

		areaId = callerId;
		$("#areaId").val(areaId);
		$("#pincodeListHeader").html(callerName);
		
		ajax('/pincode/getByAreaId?areaId='+areaId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.OK == jqXHR.status) {
				var tableContent="";		
				for(var key in dataOrError) {
					tableContent +=	'<tr id="pincode_' + dataOrError[key].pincodeId + '">' +
										'<td>' + dataOrError[key].pincodeName + '</td>' + 
										'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
										'title="Edit Pincode" ' +
										'onclick="getPincodeEdit(\'' + dataOrError[key].pincodeId + '\')">' +
										'</span> ' +
										 '<span class="carousel-next glyphicon glyphicon-list" ' +
										 'data-callCarousel="locality" ' +
										 'data-callerId="' + dataOrError[key].pincodeId + '"  ' +
										 'data-callerName="' + dataOrError[key].pincodeName + '" title="View Localities"></span> ' +
										'</td>' +
									'</tr>';
				}
				$("#pincodeListBody").html(tableContent);
			} else if(HttpStatus.NO_CONTENT == jqXHR.status) {
				var tableContent="";		
				$("#pincodeListBody").html(tableContent);
			} else {
				alert("Something went wrong. Please try again later!");
				return false;
			}
		}, 'GET');	
	} else if("locality" == getCarouselContainer) {
		$('#sliderContainer').carousel('next');
		localityEdit = false;
		localityEditId = 0;
		
		$("#localityForm").trigger("reset");
		
		preValidate();

		pincodeId = callerId;
		$("#pincodeId").val(pincodeId);
		$("#localityListHeader").html(callerName);
		
		ajax('/locality/getByPincodeId?pincodeId='+pincodeId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.OK == jqXHR.status) {
				var tableContent="";		
				for(var key in dataOrError) {
					tableContent +=	'<tr id="locality_' + dataOrError[key].localityId + '">' +
										'<td>' + dataOrError[key].localityName + '</td>' + 
										'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
										'title="Edit Locality" ' +
										'onclick="getLocalityEdit(\'' + dataOrError[key].localityId + '\')">' +
										'</span> ' +
									'</tr>';
				}
				$("#localityListBody").html(tableContent);
			} else if(HttpStatus.NO_CONTENT == jqXHR.status) {
				var tableContent="";		
				$("#localityListBody").html(tableContent);
			} else {
				alert("Something went wrong. Please try again later!");
				return false;
			}
		}, 'GET');	
	}
});
//CAROUSEL FORM DATA CODE//----------------------------------------------------------------------

//COUNTRY CODE//----------------------------------------------------------------------
$("#countrySubmit").click(function () {
	var formData = getFormData($("#countryForm"));
	
	preValidate();

	if(countryEdit == true) {
		formData.countryId = countryEditId;
	}

	ajax('/country/save', function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.OK == jqXHR.status) {
			$('#countryListBody tr').removeClass('warning success');
			var trHeader = '<tr id="country_' + dataOrError.data.countryId + '" class="success">';
			var trBody = 		'<td>' + formData.countryName + '</td>' + 
								'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
									 'title="Edit Country" ' +
									 'onclick="getCountryEdit(\'' + dataOrError.data.countryId + '\')">' +
									 '</span> ' +
									 '<span class="carousel-next glyphicon glyphicon-list" ' +
									 'data-callCarousel="state" ' +
									 'data-callerId="' + dataOrError.data.countryId + '"  ' +
									 'data-callerName="' + formData.countryName + '" title="View States"></span> ' +
									 '</td>';
			
			var trFooter = '</tr>';
			if(true == countryEdit) {
				$("#country_" + countryEditId).html(trBody);
				$("#country_" + countryEditId).addClass('success');
				countryEdit = false;
				countryEditId = 0;
			} else {
				$("#countryListBody").html(trHeader + trBody + trFooter + $("#countryListBody").html());
			}
			$("#countryForm").trigger('reset');	
		} else if(HttpStatus.CONFLICT == jqXHR.status) {
			$('#countryFormError').addClass('text-danger');
			$('#countryFormError').removeClass('hidden');
			$("#countryFormError").html("Data already present!");
			$("#countryName").css('border-color', '#F00');
			return false;
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			if(dataOrError.messages) {
				$("#countryNameError").html(dataOrError.messages['countryName']);
				$("#countryName").css('border-color', '#F00');
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
	}, 'PUT', formData);	
});

function getCountryEdit(id){
	$('#countryListBody tr').removeClass('warning success');

	countryEdit = true;
	countryEditId = id;
	$("#country_" + id).addClass("warning");
	
	ajax('/country/getByCountryId?countryId='+id,function(jqXHR, textStatus, dataOrError){
		$("#countryName").val(dataOrError.countryName);
		$("#countryName").focus();
	});	
}
//COUNTRY CODE//----------------------------------------------------------------------

//STATE CODE//------------------------------------------------------------------------
$("#stateSubmit").click(function () {
	
	var formData = getFormData($("#stateForm"));
	
	if(stateEdit == true) {
		formData.stateId = stateEditId;
	}

	ajax('/state/save', function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.OK == jqXHR.status) {
			$('#stateListBody tr').removeClass('warning success');
			var trHeader = '<tr id="state_' + dataOrError.data.stateId + '" class="success">';
			var trBody = 		'<td>' + formData.stateName + '</td>' + 
								'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
								 'title="Edit State" ' +
								 'onclick="getStateEdit(\'' + dataOrError.data.stateId + '\')">' +
								 '</span> ' +
								 '<span class="carousel-next glyphicon glyphicon-list" ' +
								 'data-callCarousel="city" ' +
								 'data-callerId="' + dataOrError.data.stateId + '"  ' +
								 'data-callerName="' + formData.stateName + '" title="View Cities"></span> ' +
								 '</td>';
			var trFooter = '</tr>';
			if(true == stateEdit) {
				$("#state_" + stateEditId).html(trBody);
				$("#state_" + stateEditId).addClass('success');
				stateEdit = false;
				stateEditId = 0;
			} else {
				$("#stateListBody").html(trHeader + trBody + trFooter + $("#stateListBody").html());
			}
			$("#stateId").val("");	
			$("#stateName").val("");	
		} else if(HttpStatus.CONFLICT == jqXHR.status) {
			$('#stateFormError').addClass('text-danger');
			$('#stateFormError').removeClass('hidden');
			$("#stateFormError").html("Data already present!");
			$("#stateName").css('border-color', '#F00');
			return false;
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			if(dataOrError.messages) {
				$("#stateNameError").html(dataOrError.messages['stateName']);
				$("#stateName").css('border-color', '#F00');
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
	}, 'PUT', formData);
});

function getStateEdit(id){
	$('#stateListBody tr').removeClass('warning success');

	stateEdit = true;
	stateEditId = id;
	$("#state_" + id).addClass("warning");
	
	ajax('/state/getByStateId?stateId='+id,function(jqXHR, textStatus, dataOrError){
		$("#stateName").val(dataOrError.stateName);
		$("#stateName").focus();
	});	
}


//STATE CODE//------------------------------------------------------------------------


//CITY CODE//------------------------------------------------------------------------
$("#citySubmit").click(function () {
	
	var formData = getFormData($("#cityForm"));
	
	if(cityEdit == true) {
		formData.cityId = cityEditId;
	}

	ajax('/city/save', function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.OK == jqXHR.status) {
			$('#cityListBody tr').removeClass('warning success');
			var trHeader = '<tr id="city_' + dataOrError.data.cityId + '" class="success">';
			var trBody = 		'<td>' + formData.cityName + '</td>' + 
								'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
								 'title="Edit City" ' +
								 'onclick="getCityEdit(\'' + dataOrError.data.cityId + '\')">' +
								 '</span> ' +
								 '<span class="carousel-next glyphicon glyphicon-list" ' +
								 'data-callCarousel="area" ' +
								 'data-callerId="' + dataOrError.data.cityId + '"  ' +
								 'data-callerName="' + formData.cityName + '" title="View Areas"></span> ' +
								 '</td>';
			var trFooter = '</tr>';
			if(true == cityEdit) {
				$("#city_" + cityEditId).html(trBody);
				$("#city_" + cityEditId).addClass('success');
				cityEdit = false;
				cityEditId = 0;
			} else {
				$("#cityListBody").html(trHeader + trBody + trFooter + $("#cityListBody").html());
			}
			$("#cityId").val("");	
			$("#cityName").val("");	
		} else if(HttpStatus.CONFLICT == jqXHR.status) {
			$('#cityFormError').addClass('text-danger');
			$('#cityFormError').removeClass('hidden');
			$("#cityFormError").html("Data already present!");
			$("#cityName").css('border-color', '#F00');
			return false;
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			if(dataOrError.messages) {
				$("#cityNameError").html(dataOrError.messages['cityName']);
				$("#cityName").css('border-color', '#F00');
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
	}, 'PUT', formData);
});

function getCityEdit(id){
	$('#cityListBody tr').removeClass('warning success');

	cityEdit = true;
	cityEditId = id;
	$("#city_" + id).addClass("warning");
	
	ajax('/city/getByCityId?cityId='+id,function(jqXHR, textStatus, dataOrError){
		$("#cityName").val(dataOrError.cityName);
		$("#cityName").focus();
	});	
}
//CITY CODE//------------------------------------------------------------------------


//AREA CODE//------------------------------------------------------------------------
$("#areaSubmit").click(function () {
	
	var formData = getFormData($("#areaForm"));
	
	if(areaEdit == true) {
		formData.areaId = areaEditId;
	}

	ajax('/area/save', function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.OK == jqXHR.status) {
			$('#areaListBody tr').removeClass('warning success');
			var trHeader = '<tr id="area_' + dataOrError.data.areaId + '" class="success">';
			var trBody = 		'<td>' + formData.areaName + '</td>' + 
								'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
								 'title="Edit Area" ' +
								 'onclick="getAreaEdit(\'' + dataOrError.data.areaId + '\')">' +
								 '</span> ' +
								 '<span class="carousel-next glyphicon glyphicon-list" ' +
								 'data-callCarousel="pincode" ' +
								 'data-callerId="' + dataOrError.data.areaId + '"  ' +
								 'data-callerName="' + formData.areaName + '" title="View Pincodes"></span> ' +
								 '</td>';
			var trFooter = '</tr>';
			if(true == areaEdit) {
				$("#area_" + areaEditId).html(trBody);
				$("#area_" + areaEditId).addClass('success');
				areaEdit = false;
				areaEditId = 0;
			} else {
				$("#areaListBody").html(trHeader + trBody + trFooter + $("#areaListBody").html());
			}
			$("#areaId").val("");	
			$("#areaName").val("");	
		} else if(HttpStatus.CONFLICT == jqXHR.status) {
			$('#areaFormError').addClass('text-danger');
			$('#areaFormError').removeClass('hidden');
			$("#areaFormError").html("Data already present!");
			$("#areaName").css('border-color', '#F00');
			return false;
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			if(dataOrError.messages) {
				$("#areaNameError").html(dataOrError.messages['areaName']);
				$("#areaName").css('border-color', '#F00');
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
	}, 'PUT', formData);
});

function getAreaEdit(id){
	$('#areaListBody tr').removeClass('warning success');

	areaEdit = true;
	areaEditId = id;
	$("#area_" + id).addClass("warning");
	
	ajax('/area/getByAreaId?areaId='+id,function(jqXHR, textStatus, dataOrError){
		$("#areaName").val(dataOrError.areaName);
		$("#areaName").focus();
	});	
}
//AREA CODE//------------------------------------------------------------------------

//PINCODE CODE//------------------------------------------------------------------------
$("#pincodeSubmit").click(function () {
	
	var formData = getFormData($("#pincodeForm"));
	
	if(pincodeEdit == true) {
		formData.pincodeId = pincodeEditId;
	}

	ajax('/pincode/save', function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.OK == jqXHR.status) {
			$('#pincodeListBody tr').removeClass('warning success');
			var trHeader = '<tr id="pincode_' + dataOrError.data.pincodeId + '" class="success">';
			var trBody = 		'<td>' + formData.pincodeName + '</td>' + 
								'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
								 'title="Edit Pincode" ' +
								 'onclick="getPincodeEdit(\'' + dataOrError.data.pincodeId + '\')">' +
								 '</span> ' +
								 '<span class="carousel-next glyphicon glyphicon-list" ' +
								 'data-callCarousel="locality" ' +
								 'data-callerId="' + dataOrError.data.pincodeId + '"  ' +
								 'data-callerName="' + formData.pincodeName + '" title="View Localities"></span> ' +
								 '</td>';
			var trFooter = '</tr>';
			if(true == pincodeEdit) {
				$("#pincode_" + pincodeEditId).html(trBody);
				$("#pincode_" + pincodeEditId).addClass('success');
				pincodeEdit = false;
				pincodeEditId = 0;
			} else {
				$("#pincodeListBody").html(trHeader + trBody + trFooter + $("#pincodeListBody").html());
			}
			$("#pincodeId").val("");	
			$("#pincodeName").val("");	
		} else if(HttpStatus.CONFLICT == jqXHR.status) {
			$('#pincodeFormError').addClass('text-danger');
			$('#pincodeFormError').removeClass('hidden');
			$("#pincodeFormError").html("Data already present!");
			$("#pincodeName").css('border-color', '#F00');
			return false;
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			if(dataOrError.messages) {
				$("#pincodeNameError").html(dataOrError.messages['pincodeName']);
				$("#pincodeName").css('border-color', '#F00');
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
	}, 'PUT', formData);
});

function getPincodeEdit(id){
	$('#pincodeListBody tr').removeClass('warning success');

	pincodeEdit = true;
	pincodeEditId = id;
	$("#pincode_" + id).addClass("warning");
	
	ajax('/pincode/getByPincodeId?pincodeId='+id,function(jqXHR, textStatus, dataOrError){
		$("#pincodeName").val(dataOrError.pincodeName);
		$("#pincodeName").focus();
	});	
}



//PINCODE CODE//------------------------------------------------------------------------

//LOCALITY CODE//------------------------------------------------------------------------
$("#localitySubmit").click(function () {
	
	var formData = getFormData($("#localityForm"));
	
	if(localityEdit == true) {
		formData.localityId = localityEditId;
	}

	ajax('/locality/save', function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.OK == jqXHR.status) {
			$('#localityListBody tr').removeClass('warning success');
			var trHeader = '<tr id="locality_' + dataOrError.data.localityId + '" class="success">';
			var trBody = 		'<td>' + formData.localityName + '</td>' + 
								'<td><span class="btn-country-edit glyphicon glyphicon-pencil" ' +
								 'title="Edit Locality" ' +
								 'onclick="getLocalityEdit(\'' + dataOrError.data.localityId + '\')">' +
								 '</span> ' +
								 '</td>';
			var trFooter = '</tr>';
			if(true == localityEdit) {
				$("#locality_" + localityEditId).html(trBody);
				$("#locality_" + localityEditId).addClass('success');
				localityEdit = false;
				localityEditId = 0;
			} else {
				$("#localityListBody").html(trHeader + trBody + trFooter + $("#localityListBody").html());
			}
			$("#localityId").val("");	
			$("#localityName").val("");	
		} else if(HttpStatus.CONFLICT == jqXHR.status) {
			$('#localityFormError').addClass('text-danger');
			$('#localityFormError').removeClass('hidden');
			$("#localityFormError").html("Data already present!");
			$("#localityName").css('border-color', '#F00');
			return false;
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			if(dataOrError.messages) {
				$("#localityNameError").html(dataOrError.messages['localityName']);
				$("#localityName").css('border-color', '#F00');
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
	}, 'PUT', formData);
});

function getLocalityEdit(id){
	$('#localityListBody tr').removeClass('warning success');

	localityEdit = true;
	localityEditId = id;
	$("#locality_" + id).addClass("warning");
	
	ajax('/locality/getByLocalityId?localityId='+id,function(jqXHR, textStatus, dataOrError){
		$("#localityName").val(dataOrError.localityName);
		$("#localityName").focus();
	});	
}



//LOCALITY CODE//------------------------------------------------------------------------