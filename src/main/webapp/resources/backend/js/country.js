var countryEdit = false;
var countryEditId = 0;

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
		ajax('/country/add', function(jqXHR, textStatus, dataOrError) {
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
		formData.countryId = countryEditId;
		
		ajax('/country/edit', function(jqXHR, textStatus, dataOrError) {
			if(jqXHR.status != 204) {
				$('#countryListBody tr').removeClass('warning success');
				$("#country_form")[0].reset();	
				var trBody = '<td>' + dataOrError.countryName + '</td>' + 
							 '<td><a href="javascript:void(0);" onClick="getCountryEdit(' + countryEditId + ')">Edit</a></td>' +
							 '<td><a href="javascript:void(0);">Delete</a></td>';
				$("#country_" + countryEditId).html(trBody);
				$("#country_" + countryEditId).addClass('success');
				countryEdit = false;
				countryEditId = 0;
			} else {
				$("#countryName").css('borderColor', '#F00');
				alert('Data already exist');
			}
		}, 'PUT', formData);
	}
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
