var areaEdit = false;
var areaEditId = 0;

$("#area_submit").click(function () {
	
	var formData = getFormData($("#area_form"));
	
	preValidate();

	if(areaEdit == true) {
		formData.areaId = areaEditId;
	}

	ajax('/area/save', function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.OK == jqXHR.status) {
			$('#areaListBody tr').removeClass('warning success');
			var trHeader = '<tr id="area_' + dataOrError.data.areaId + '" class="success">';
			var trBody = 		'<td>' + formData.areaName + '</td>' + 
								'<td><a href="javascript:void(0);" onClick="getAreaEdit(' + dataOrError.data.areaId + ')">Modify</a>' +
								' | <a href="/admin/address/area?areaId=' + dataOrError.data.areaId + '">View Pincode</a></td>';
			var trFooter = '</tr>';
			if(true == areaEdit) {
				$("#area_" + areaEditId).html(trBody);
				$("#area_" + areaEditId).addClass('success');
				areaEdit = false;
				areaEditId = 0;
			} else {
				$("#areaListBody").html(trHeader + trBody + trFooter + $("#areaListBody").html());
			}
			$("#area_form").trigger('reset');	
		} else if(HttpStatus.CONFLICT == jqXHR.status) {
			$('#formError').addClass('text-danger');
			$('#formError').removeClass('hidden');
			$("#formError").html("Data already present!");
			$("#areaName").css('border-color', '#F00');
			return false;
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			if(dataOrError.messages) {
				$("#areaNameError").html(dataOrError.messages['areaName']);
				$("#areaName").css('border-color', '#F00');
			}
			return false;
		} else {
			alert("Something went wrong. Please try again later!");
			return false;
		}
	}, 'PUT', formData);
});

function getAreaEdit(id){
	$('#areaListBody tr').removeClass('warning success');

	areaEdit = true;
	areaEditId = id;
	$("#area_" + id).addClass("warning");
	
	ajax('/area/getByAreaId?areaId='+id,function(jqXHR, textStatus, dataOrError){
		$("#areaName").val(dataOrError.areaName);
		$("#areaName").focus();
	});	
}
