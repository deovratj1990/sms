var localityEdit = false;
var localityEditId = 0;

$("#locality_submit").click(function () {
	
	var formData = getFormData($("#locality_form"));
	
	preValidate();

	if(localityEdit == true) {
		formData.localityId = localityEditId;
	}

	ajax('/locality/save', function(jqXHR, textStatus, dataOrError) {
		if(200 == jqXHR.status) {
			$('#localityListBody tr').removeClass('warning success');
			var trHeader = '<tr id="locality_' + dataOrError.data.localityId + '" class="success">';
			var trBody = 		'<td>' + formData.localityName + '</td>' + 
								'<td><a href="javascript:void(0);" onClick="getLocalityEdit(' + dataOrError.data.localityId + ')">Edit</a></td>';
			var trFooter = '</tr>';
			if(true == localityEdit) {
				$("#locality_" + localityEditId).html(trBody);
				$("#locality_" + localityEditId).addClass('success');
				localityEdit = false;
				localityEditId = 0;
			} else {
				$("#localityListBody").html(trHeader + trBody + trFooter + $("#localityListBody").html());
			}
			$("#locality_form").trigger('reset');	
		} else if(409 == jqXHR.status) {
			$('#formError').addClass('text-danger');
			$('#formError').removeClass('hidden');
			$("#formError").html("Data already present!");
			$("#localityName").css('border-color', '#F00');
			return false;
		} else if(400 == jqXHR.status) {
			if(dataOrError.messages) {
				$("#localityNameError").html(dataOrError.messages['localityName']);
				$("#localityName").css('border-color', '#F00');
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
	}, 'PUT', formData);
});

function getLocalityEdit(id){
	$('#localityListBody tr').removeClass('warning success');

	localityEdit = true;
	localityEditId = id;
	$("#locality_" + id).addClass("warning");
	
	ajax('/locality/getByLocalityId?localityId='+id,function(jqXHR, textStatus, dataOrError){
		$("#localityName").val(dataOrError.localityName);
		$("#localityName").focus();
	});	
}
