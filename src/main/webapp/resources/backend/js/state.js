var stateEdit = false;
var stateEditId = 0;

$("#state_submit").click(function () {
	
	if("" == $("#countryId").val()) {
		$("#countryIdError").html("Select Country!");
		$("#countryId").css("borderColor", "#F00");
		return false;
	} else {
		$("#countryIdError").html('');
		$("#countryId").css("borderColor", "");
	}
	
	if($("#stateName").val() == ''){
		$("#stateName").css('borderColor', '#F00');
		$("#stateName").attr('placeHolder', 'Cannot be blank.');
		return false;
	} else {
		$("#stateName").css('borderColor', '');
		$("#stateName").attr('placeHolder', 'Enter State Name');
	}
	
	var formData = getFormData($("#state_form"));
	
	if(stateEdit == false) {
		ajax('/state/add', function(jqXHR, textStatus, dataOrError) {
			if(jqXHR.status != 204) {
				$('#stateListBody tr').removeClass('warning success');
				var trBody = '<tr id="state_' + dataOrError.stateId + '" class="success">' +
									'<td>' + $("#countryId option:selected").text() + '</td>' + 
									'<td>' + dataOrError.stateName + '</td>' + 
									'<td><a href="javascript:void(0);" onClick="getstateEdit(' + dataOrError.stateId + ')">Edit</a></td>' +
									'<td><a href="javascript:void(0);">Delete</a></td>' +
								'</tr>';
				$("#state_form").trigger('reset');	
				$("#stateName").css('borderColor', '');
				$("#stateListBody").html(trBody + $("#stateListBody").html());
			} else {
				$("#stateName").css('borderColor', '#F00');
				alert('Data already exist');
			}
		}, 'PUT', formData);	
	} else {
		formdata.stateId = stateEditId;
		ajax('/state/edit', function(jqXHR, textStatus, dataOrError) {
			if(jqXHR.status != 204) {
				$('#stateListBody tr').removeClass('warning success');
				var trBody = '<td>' + $("#countryId option:selected").text() + '</td>' + 
							 '<td>' + dataOrError.stateName + '</td>' + 
							 '<td><a href="javascript:void(0);" onClick="getstateEdit(' + stateEditId + ')">Edit</a></td>' +
							 '<td><a href="javascript:void(0);">Delete</a></td>';
				$("#state_form").trigger('reset');	
				$("#state_" + stateEditId).html(trBody);
				$("#state_" + stateEditId).addClass('success');
				stateEdit = false;
				stateEditId = 0;
			} else {
				$("#stateName").css('borderColor', '#F00');
				alert('Data already exist');
			}
		}, 'PUT', formData);
	}
});

function getstateEdit(id){
	$('#stateListBody tr').removeClass('warning success');

	stateEdit = true;
	stateEditId = id;
	$("#state_" + id).addClass("warning");
	
	ajax('/state/getByStateId?stateId='+id,function(jqXHR, textStatus, dataOrError){
		$("#stateName").val(dataOrError.stateName);
		$("#stateName").focus();
	});	
}
