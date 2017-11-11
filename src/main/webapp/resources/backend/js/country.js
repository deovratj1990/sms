var countryEdit = false;
var countryEditId = 0;
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
		dataType: 'json',
		success: function (data, textStatus, jqXHR) {
			callback(jqXHR, textStatus, data);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			callback(jqXHR, textStatus, errorThrown);
		}
	};
	
	if(method == 'POST' || method == 'PUT') {
		options.data = data;
	}
	
	$.ajax(options);
}

$("#country_submit").click(function () {
	if($("#countryName").val() == ''){
		$("#countryName").css('borderColor', '#F00');
		$("#countryName").attr('placeHolder', 'Cannot be blank.');
		return false;
	} else {
		$("#countryName").css('borderColor', '');
		$("#countryName").attr('placeHolder', 'Enter Country Name');
	}
	
	var formData = getFormData($("#country_form"));
	
	if(countryEdit == false) {
		ajax('http://localhost:8080/address/addCountry', function(jqXHR, textStatus, dataOrError) {
			if(jqXHR.status != 204) {
				$('#countryListBody tr').removeClass('warning success');
				$("#country_form")[0].reset();	
				var trBody = '<tr id="country_' + dataOrError.countryId + '" class="success">' +
									'<td>' + dataOrError.countryName + '</td>' + 
									'<td><a href="javascript:void(0);" onClick="getCountryEdit(' + dataOrError.countryId + ')">Edit</a></td>' +
									'<td><a href="javascript:void(0);">Delete</a></td>' +
								'</tr>';
				$("#countryName").css('borderColor', '');
				$("#countryListBody").html(trBody + $("#countryListBody").html());
			} else {
				$("#countryName").css('borderColor', '#F00');
				alert('Data already exist');
			}
		}, 'PUT', formData);	
	} else {
		ajax('http://localhost:8080/address/editCountry?countryId=' + countryEditId, function(jqXHR, textStatus, dataOrError) {
			console.log(jqXHR);
			
			$('#countryListBody tr').removeClass('warning success');
			$("#country_form")[0].reset();	
			var trBody = '<td>' + dataOrError.countryName + '</td>' + 
						 '<td><a href="javascript:void(0);" onClick="getCountryEdit(' + countryEditId + ')">Edit</a></td>' +
						 '<td><a href="javascript:void(0);">Delete</a></td>';
			$("#country_" + countryEditId).html(trBody);
			$("#country_" + countryEditId).addClass('success');
			countryEdit = false;
			countryEditId = 0;
		}, 'PUT', formData);
	}
	

});

function getCountryEdit(id){
	$('#countryListBody tr').removeClass('warning success');

	countryEdit = true;
	countryEditId = id;
	$("#country_" + id).addClass("warning");
	
	ajax('http://localhost:8080/address/getCountry?countryId='+id,function(jqXHR, textStatus, dataOrError){
		$("#countryName").val(dataOrError.countryName);
		$("#countryName").focus();
	});	
}
