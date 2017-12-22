var countryEdit = false;
var countryEditId = 0;

$("#country_submit").click(function () {
	var formData = getFormData($("#country_form"));
	
	preValidate();

	if(countryEdit == true) {
		formData.countryId = countryEditId;
	}

	ajax('/country/save', function(jqXHR, textStatus, dataOrError) {
		if(200 == jqXHR.status) {
			$('#countryListBody tr').removeClass('warning success');
			var trHeader = '<tr id="country_' + dataOrError.data.countryId + '" class="success">';
			var trBody = 		'<td>' + formData.countryName + '</td>' + 
								'<td><a href="javascript:void(0);" onClick="getCountryEdit(' + dataOrError.data.countryId + ')">Edit</a></td>' +
								'<td><a href="/admin/address/state?countryId=' + dataOrError.data.countryId + '">Add</a></td>';
			var trFooter = '</tr>';
			if(true == countryEdit) {
				$("#country_" + countryEditId).html(trBody);
				$("#country_" + countryEditId).addClass('success');
				countryEdit = false;
				countryEditId = 0;
			} else {
				$("#countryListBody").html(trHeader + trBody + trFooter + $("#countryListBody").html());
			}
			$("#country_form").trigger('reset');	
		} else if(409 == jqXHR.status) {
			$('#formError').addClass('text-danger');
			$('#formError').removeClass('hidden');
			$("#formError").html("Data already present!");
			$("#countryName").css('border-color', '#F00');
			return false;
		} else if(400 == jqXHR.status) {
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
