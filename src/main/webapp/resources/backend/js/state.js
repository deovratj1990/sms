var stateEdit = false;
var stateEditId = 0;

$("#state_submit").click(function () {
	
	var formData = getFormData($("#state_form"));
	
	preValidate();

	if(stateEdit == true) {
		formData.stateId = stateEditId;
	}

	ajax('/state/save', function(jqXHR, textStatus, dataOrError) {
		if(200 == jqXHR.status) {
			$('#stateListBody tr').removeClass('warning success');
			var trHeader = '<tr id="state_' + dataOrError.data.stateId + '" class="success">';
			var trBody = 		'<td>' + formData.stateName + '</td>' + 
								'<td><a href="javascript:void(0);" onClick="getstateEdit(' + dataOrError.data.stateId + ')">Edit</a></td>' +
								'<td><a href="/admin/address/city?stateId=' + dataOrError.data.stateId + '">Add</a></td>';
			var trFooter = '</tr>';
			if(true == stateEdit) {
				$("#state_" + stateEditId).html(trBody);
				$("#state_" + stateEditId).addClass('success');
				stateEdit = false;
				stateEditId = 0;
			} else {
				$("#stateListBody").html(trHeader + trBody + trFooter + $("#stateListBody").html());
			}
			$("#state_form").trigger('reset');	
		} else if(409 == jqXHR.status) {
			$('#formError').addClass('text-danger');
			$('#formError').removeClass('hidden');
			$("#formError").html("Data already present!");
			$("#stateName").css('border-color', '#F00');
			return false;
		} else if(400 == jqXHR.status) {
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
