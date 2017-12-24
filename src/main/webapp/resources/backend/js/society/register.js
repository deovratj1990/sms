var roomNumbers = {};

$("#societyWingCount").keyup(function (event) {
	if((48 <= event.which && 57 >= event.which) || (96 <= event.which && 105 >= event.which) || 8 == event.which || 46 == event.which) {
		var wingCount = (!isNaN($(this).val()) ? parseInt($(this).val()) : 0);
		
	    var string = '';
		
		var totalElement = 0;
	    var count = 0;
	
	    for(var i = 1 ; i <= Math.ceil(wingCount/3) ; i++){
	    	string += '<div class="form-group">';	
	    	
	    	if(i > (wingCount / 3)) {
	    		if(1 == (wingCount % 3)) {
	    			string += '<div class="col-sm-4" style="margin-top:5px;"></div>'	    			
	    		} else if(2 == (wingCount % 3)) {
	    			string += '<div class="col-sm-2" style="margin-top:5px;"></div>'	    			
	    		}
	    	}

	    	//alert(wingCol);
	    	
			for(var j = 1 ; j <= wingCount && j <= 3 && totalElement < wingCount ; j++){
			  string += '<div class="col-sm-4" style="margin-top:5px;">' +
					    '  <input type="text" class="form-control wingName" id="wingName_' + totalElement + '" name="wingName" data-room-id="roomName_' + totalElement + '" placeholder="Wing">' +
					    '  <div class="text-danger msg" id="wingName_' + totalElement + 'Error"></div>' +
					    '  <textarea class="form-control roomName" rows="5" id="roomName_' + totalElement + '" name="roomName" placeholder="Room" style="margin-top:5px;"></textarea>' +
					    '  <div class="text-danger msg" id="roomName_' + totalElement + 'Error"></div>' +
					    '</div>';
			  totalElement ++;
			}
	
			string += '</div>';
		}
			  
	    $('#wingForm').html(string);
	}	
});

$("#secretaryWing").focus(function () {
	resetSelect(this, "Wing");
	resetSelect("#secretaryRoom", "Room");
	var element = this;
	$('input[name="wingName"]').each( function () {
		$(element).append('<option value="' + $(this).val() + '">' + $(this).val() + '</option>');
	});
});

$("#secretaryWing").change(function ()  {
	var roomNameOptions = '';
	var element = this;
	
	$('input[name="wingName"]').each( function () {
		if($(element).val() == $(this).val()) {
			var $room = $('#' + $(this).attr('data-room-id'));
			var roomNames = $room.val().split(",");
			var roomNumbers = [];
			for(var key in roomNames) {
				if(roomNames[key].indexOf("-") != -1) {
					var range = roomNames[key].split("-");
	
					if(range.length == 2 && !isNaN(range[0]) && !isNaN(range[1])){
						var range0 = parseInt(range[0]);
						var range1 = parseInt(range[1]);
	
						var start_val = (range0 < range1 ? range0 : range1);
						var end_val = (range1 < range0 ? range0 : range1);
	
						for(var val = start_val; val <= end_val; val++) {
							roomNumbers.push(val.toString());
						}
					}
				} else {
					roomNumbers.push(roomNames[key]);
				}
			}
			resetSelect("#secretaryRoom");
			for(var key in roomNumbers) {
				roomNameOptions += '<option value="' + roomNumbers[key] + '">' + roomNumbers[key] + '</option>';
			}
			$("#secretaryRoom").append(roomNameOptions);
			return false;
		}
	});
	
	
});

$("#registrationSubmit").click(function () {
	var formData = getFormData($("#registrationForm"));

	preValidate();
	
	if($("#societyWingCount").val() > 0) {
		if("object" != typeof(formData.roomName)) {
			formData.roomName = [formData.roomName];
		}
		if("object" != typeof(formData.wingName)) {
			formData.wingName = [formData.wingName];
		}
	}

	ajax('/society/register', function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.NO_CONTENT == jqXHR.status) {
			$("#wingForm").html("");
			$("#registrationForm").trigger("reset");
			$("#subscriptionPeriodDuration").html('<option value="">-Duration-</option>');
			$("#subscriptionPeriodDuration").attr("disabled", true);
			$('#formError').removeClass('text-danger');
			$('#formError').addClass('text-success');
			$('#formError').removeClass('hidden');
			$("#formError").html("Data Successfully Saved!");
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		} else if(HttpStatus.CONFLICT == jqXHR.status) {
			$('#formError').addClass('text-danger');
			$('#formError').removeClass('hidden');
			$("#formError").html("Data already present!");
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			for(var key in dataOrError.messages) {
				if("object" == typeof(dataOrError.messages[key])) {
					for(var ky in dataOrError.messages[key]) {
						$("#" + ky + "Error").html(dataOrError.messages[key][ky]);
						$("#" + ky).css('border-color', '#F00');
					}
				} else {
					$("#" + key + "Error").html(dataOrError.messages[key]);
					$("#" + key).css('border-color', '#F00');
				}
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
		
	}, 'PUT', formData);
	return false;
});

$("#countryId").change(function() {
	var countryId = $(this).val();	
	resetSelect("#stateId");
	resetSelect("#cityId");
	resetSelect("#pincodeId");
	resetSelect("#localityId");
	if("" != countryId){
		ajax('/state/getByCountryId?countryId=' + countryId, function (jqXHR, textStatus, dataOrError) {
			if(HttpStatus.NO_CONTENT != jqXHR.status) {
				var option_str = "";
				for(var key in dataOrError) {
					option_str += '<option value="' + dataOrError[key].stateId + '">' + dataOrError[key].stateName + '</option>';
				}
				$("#stateId").append(option_str);
			} else {
				resetSelect("#stateId", "No Data Present");
			}
		});
	}
});

$("#stateId").change(function(){
	var stateId = $(this).val();

	resetSelect("#cityId");
	resetSelect("#pincodeId");
	resetSelect("#localityId");
	
	if("" != stateId) {
		ajax('/city/getByStateId?stateId=' + stateId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.NO_CONTENT != jqXHR.status) {
				var option_str = "";
				for(var key in dataOrError){
					option_str += '<option value="' + dataOrError[key].cityId + '">' + dataOrError[key].cityName + '</option>';
				}
				$("#cityId").append(option_str);
			} else {
				resetSelect("#cityId", "No Data Present");
			}
		});
	}
});

$("#cityId").change(function(){
	var cityId = $(this).val();

	resetSelect("#areaId");
	resetSelect("#pincodeId");
	resetSelect("#localityId");
	
	if("" != cityId) {
		ajax("/area/getByCityId?cityId=" + cityId, function(jqXHR, textStatus, dataOrError){
			if(HttpStatus.NO_CONTENT != jqXHR.status){
				var option_str = "";
				for(var key in dataOrError){
					option_str += '<option value="' + dataOrError[key].areaId + '">' + dataOrError[key].areaName + '</option>';
				}
				$("#areaId").append(option_str);
			} else{
				resetSelect("#areaId", "No Data Present");
			}
		});
	}
});

$("#areaId").change(function(){
	var areaId = $(this).val();

	resetSelect("#pincodeId");
	resetSelect("#localityId");
	
	if("" != areaId) {
		ajax("/pincode/getByAreaId?areaId=" + areaId, function(jqXHR, textStatus, dataOrError){
			if(HttpStatus.NO_CONTENT != jqXHR.status){
				var option_str = "";
				for(var key in dataOrError){
					option_str += '<option value="' + dataOrError[key].pincodeId + '">' + dataOrError[key].pincodeName + '</option>';
				}
				$("#pincodeId").append(option_str);
			} else{
				resetSelect("#pincodeId", "No Data Present");
			}
		});
	}
});

$("#pincodeId").change(function(){
	var pincodeId = $(this).val();

	resetSelect("#localityId");
	
	if("" != pincodeId) {
		ajax("/locality/getByPincodeId?pincodeId=" + pincodeId, function(jqXHR, textStatus, dataOrError){
			if(HttpStatus.NO_CONTENT != jqXHR.status) {
				var option_str = "";
				for(var key in dataOrError){
					option_str += '<option value="' + dataOrError[key].localityId + '">' + dataOrError[key].localityName + '</option>';
				}
				
				$("#localityId").append(option_str);
			} else {
				resetSelect("#localityId", "No Data Present");
			}
		});
	}
});

$("#subscriptionPeriodType").change(function(){
	var subscriptionPeriodType = $(this).val();
	
	if("" != subscriptionPeriodType) {
		if(1 == subscriptionPeriodType) {
			$("#subscriptionPeriodDuration").attr("disabled", false);
			$("#subscriptionPeriodDuration").html('<option value="3">3 Month</option>');
		} else {
			$("#subscriptionPeriodDuration").attr("disabled", false);
			$("#subscriptionPeriodDuration").html('<option value="12">1 Year</option>');
		}
	} else {
		$("#subscriptionPeriodDuration").attr("disabled", true);
		$("#subscriptionPeriodDuration").html('<option value="">-Duration-</option>');
	}
});