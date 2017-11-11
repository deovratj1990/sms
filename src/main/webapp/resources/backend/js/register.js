var room_numbers = {};

function getFormData($form){
    var serializedArray = $form.serializeArray();
    var formData = {};
    
    for(var index in serializedArray) {
    	if(formData[serializedArray[index].name]) {
    		if(!(formData[serializedArray[index].name] instanceof Array)) {
    			var tempVal = formData[serializedArray[index].name];
    			
    			formData[serializedArray[index].name] = [];
    			
    			formData[serializedArray[index].name].push(tempVal);
    		}
    		
    		formData[serializedArray[index].name].push(serializedArray[index].value);
    	} else {
    		formData[serializedArray[index].name] = serializedArray[index].value;
    	}
    }

    return formData;
}

function ajax(url, callback, method, data) {
	method = (method ? method.trim().toUpperCase() : 'GET');
	
	var options = {
		method: method,
		url: url,
		success: function (response) {
			callback(response);
		}
	};
	
	if(method == 'POST' || method == 'PUT') {		options.data = data;
	}
	
	$.ajax(options);
}

$("#society_wing_count").keyup(function () {
	var wing_count = parseInt($(this).val());
	
	if(wing_count){
	    var string = '';
	    var wing_col = 0
	
	    if(wing_count < 4){
	      wing_col = Math.round(12 / wing_count);
	    } else {
	      wing_col = 3;
	    }
		
		var total_element = 0;
	    var count = 0;
	
	    for(var i = 0 ; i < Math.ceil(wing_count/4) ; i++){
			string += '<div class="form-group">';
	
			for(var j = 1 ; j <= wing_count && j <= 4 && total_element < wing_count ; j++){
			  string += ' <div class="col-sm-'+wing_col+' room_number" style="margin-top:5px;"> ';
			  string += '  <input type="text" class="form-control wing_name" name="wing_name" placeholder="Wing" value="A'+ j +'">';
			  string += '  <textarea class="form-control room_name" rows="5" name="room_name" placeholder="Room" style="margin-top:5px;">101,102-105</textarea>';
			  string += ' </div>';
			  total_element ++;
			}
	
			string += '</div>';
		}
			  
	    $('#wing_form').html(string);
	
	    $('#secretary_info').removeClass('hidden');
	}
});

$("#registration_form").on("blur", ".room_name", function(elem){
	$("#registration_form .room_number").each(function () {
		var wing_name = $(this).find(".wing_name").val();
		var room_name = $(this).find(".room_name").val();

		if(wing_name && room_name) {
			var room_names = room_name.split(",");
			room_numbers[wing_name] = [];

			for(var key in room_names) {
				if(room_names[key].indexOf("-") != -1) {
					var range = room_names[key].split("-");

					if(range.length == 2 && !isNaN(range[0]) && !isNaN(range[1])){
						var range0 = parseInt(range[0]);
						var range1 = parseInt(range[1]);

						var start_val = (range0 < range1 ? range0 : range1);
						var end_val = (range1 < range0 ? range0 : range1);

						for(var val = start_val; val <= end_val; val++) {
							room_numbers[wing_name].push(val.toString());
						}
					} else {

					}
				} else {
					room_numbers[wing_name].push(room_names[key]);
				}
			}
		}
	});

	var wing_options = '';

	for(var key in room_numbers) {
		wing_options += '<option value="' + key + '">' + key + '</option>';
	}

	$("#secretary_wing").html(wing_options).trigger("change");
});

$("#secretary_wing").change(function ()  {
	var current_wing = $(this).val();
	var room_name_options = '';

	for(var key in room_numbers[current_wing]) {
		room_name_options += '<option value="' + room_numbers[current_wing][key] + '">' + room_numbers[current_wing][key] + '</option>';
	}

	$("#secretary_room").html(room_name_options);
});

$("#registration_submit").click(function () {
	var formData = getFormData($("#registration_form"));
	
	formData.room_numbers = room_numbers;
	
	$.ajax({
	    contentType: "application/json",
	    type: "POST",
		url : 'http://localhost:8080/address/register',
		data:  JSON.stringify(formData),
		success: function (response) {
			if(response.success) {
				response.data
			}
		}
	});
});

$("#country_name").change(function() {
	var country_id = $(this).val();
	
	ajax('http://localhost:8080/address/getStates?countryId=' + country_id, function (response) {
		var option_str = '<option value="">-Select-</option>';
		for(var key in response) {
			option_str += '<option value="' + response[key].countryId + '">' + response[key].stateName + '</option>';
		}
		$("#state_name").html(option_str);
	});
});

$("#state_name").change(function(){
	var state_id = $(this).val();
	
	ajax('http://localhost:8080/address/getCities?stateId=' + state_id, function(response) {
		var option_str = '<option value="">-Select-</option>';
		for(var key in response){
			option_str += '<option value="' + response[key].cityId + '">' + response[key].cityName + '</option>';
		}
		$("#city_name").html(option_str);
	});
});

$("#city_name").change(function(){
	var city_id = $(this).val();
	
	ajax("http://localhost:8080/address/getPincode?cityId=" + city_id, function(response){
		var option_str = "<option value=''>-Select-</option>";
		for(var key in response){
			option_str += '<option value="' + response[key].pincodeId + '">' + response[key].pincodeName + '</option>';
		}
		
		$("#pincode_name").html(option_str);
		
	});
});

$("#pincode_name").change(function(){
	var pincode_id = $(this).val();
	
	ajax("http://localhost:8080/address/getLocality?pincodeId=" + pincode_id, function(response){
		var option_str = "<option value=''>-Select-</option>";
		
		for(var key in response){
			option_str += '<option value="' + response[key].localityId + '">' + response[key].localityName + '</option>';
		}
		
		$("#locality_name").html(option_str);
	});
});