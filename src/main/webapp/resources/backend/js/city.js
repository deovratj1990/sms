var cityEdit = false;
var cityEditId = 0;

$("#city_submit").click(function () {
	
	var formData = getFormData($("#city_form"));
	
	preValidate();

	if(cityEdit == true) {
		formData.cityId = cityEditId;
	}

	ajax('/city/save', function(jqXHR, textStatus, dataOrError) {
		if(200 == jqXHR.status) {
			$('#cityListBody tr').removeClass('warning success');
			var trHeader = '<tr id="city_' + dataOrError.data.cityId + '" class="success">';
			var trBody = 		'<td>' + formData.cityName + '</td>' + 
								'<td><a href="javascript:void(0);" onClick="getcityEdit(' + dataOrError.data.cityId + ')">Edit</a></td>' +
								'<td><a href="/admin/address/city?cityId=' + dataOrError.data.cityId + '">Add</a></td>';
			var trFooter = '</tr>';
			if(true == cityEdit) {
				$("#city_" + cityEditId).html(trBody);
				$("#city_" + cityEditId).addClass('success');
				cityEdit = false;
				cityEditId = 0;
			} else {
				$("#cityListBody").html(trHeader + trBody + trFooter + $("#cityListBody").html());
			}
			$("#city_form").trigger('reset');	
		} else if(409 == jqXHR.status) {
			$('#formError').addClass('text-danger');
			$('#formError').removeClass('hidden');
			$("#formError").html("Data already present!");
			$("#cityName").css('border-color', '#F00');
			return false;
		} else if(400 == jqXHR.status) {
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

function getcityEdit(id){
	$('#cityListBody tr').removeClass('warning success');

	cityEdit = true;
	cityEditId = id;
	$("#city_" + id).addClass("warning");
	
	ajax('/city/getByCityId?cityId='+id,function(jqXHR, textStatus, dataOrError){
		$("#cityName").val(dataOrError.cityName);
		$("#cityName").focus();
	});	
}
