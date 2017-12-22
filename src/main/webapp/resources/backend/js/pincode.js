var pincodeEdit = false;
var pincodeEditId = 0;

$("#pincode_submit").click(function () {
	
	var formData = getFormData($("#pincode_form"));
	
	preValidate();

	if(pincodeEdit == true) {
		formData.pincodeId = pincodeEditId;
	}

	ajax('/pincode/save', function(jqXHR, textStatus, dataOrError) {
		if(200 == jqXHR.status) {
			$('#pincodeListBody tr').removeClass('warning success');
			var trHeader = '<tr id="pincode_' + dataOrError.data.pincodeId + '" class="success">';
			var trBody = 		'<td>' + formData.pincodeName + '</td>' + 
								'<td><a href="javascript:void(0);" onClick="getPincodeEdit(' + dataOrError.data.pincodeId + ')">Edit</a></td>' +
								'<td><a href="/admin/address/locality?pincodeId=' + dataOrError.data.pincodeId + '">Add</a></td>';
			var trFooter = '</tr>';
			if(true == pincodeEdit) {
				$("#pincode_" + pincodeEditId).html(trBody);
				$("#pincode_" + pincodeEditId).addClass('success');
				pincodeEdit = false;
				pincodeEditId = 0;
			} else {
				$("#pincodeListBody").html(trHeader + trBody + trFooter + $("#pincodeListBody").html());
			}
			$("#pincode_form").trigger('reset');	
		} else if(409 == jqXHR.status) {
			$('#formError').addClass('text-danger');
			$('#formError').removeClass('hidden');
			$("#formError").html("Data already present!");
			$("#pincodeName").css('border-color', '#F00');
			return false;
		} else if(400 == jqXHR.status) {
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
