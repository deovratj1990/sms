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
		success: function (response) {
			callback(response);
		}
	};
	
	if(method == 'POST' || method == 'PUT') {		options.data = data;
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
		ajax('http://localhost:8080/society/addCountry', function(response) {
			$("#country_form")[0].reset();	
			var trBody = '<tr id="country_' + response.countryId + '" class="success">' +
								//'<td>' + response.countryId + '</td>' + 
								'<td>' + response.countryName + '</td>' + 
								'<td><a href="javascript:void(0);" onClick="getCountryEdit(' + response.countryId + ')">Edit</a></td>' +
								'<td><a href="javascript:void(0);">Delete</a></td>' +
							'</tr>';
			$("#countryListBody").html(trBody + $("#countryListBody").html());
		}, 'PUT', formData);		
	} else {
		ajax('http://localhost:8080/society/editCountry?countryId=' + countryEditId, function(response) {
			$("#country_form")[0].reset();	
			var trBody = '<td>' + response.countryName + '</td>' + 
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
	$('#countryListBody tr').removeClass('danger success');

	countryEdit = true;
	countryEditId = id;
	$("#country_" + id).addClass("danger");
	
	ajax('http://localhost:8080/society/getCountry?countryId='+id,function(response){
		$("#countryName").val(response.countryName);		
	});	
}
