var subscriptionId = 0;
var sub_table;

function create_sub_list_table(id, content) {
	sub_table = '<table class="table table-striped table-bordered table-hover" >' +
					'<thead>' +
						'<tr class="text-success">' +
							'<th colspan="6" class="text-centered">Subcription List</th>' +
						'</tr>' +
					'</thead>' +
					'<thead>' +
						'<tr class="text-success">' +
							'<th>ValidFrom</th>' +
							'<th>ValidTill</th>' +
							'<th>Type</th>' +
							'<th>Status</th>' +
							'<th>Amount</th>' +
							'<th>Action</th>' +
							'</tr>' +
					'</thead>' +
						'<tbody id="subscriptionList_' + id + '">' + content + '</tbody>' +
					'</table>';
	return sub_table;
}

AccordionFactory.create("#accordionSubscription",{
	expand: function (event, chain) {
		console.log("expanded");
		
		var htmlStr = "";

		var societyId = $(event.source).attr("data-societyId");
		
		ajax("/society/getSubscriptionBySocietyId?societyId=" + societyId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.NO_CONTENT == jqXHR.status) {
				htmlStr = '<tr>' + 
						  	'<td colspan="6" align="center" class="text-danger">No Subscription Found!</td>' +
						  '</tr>';
				$("#subscriptionListClass_" + societyId).html(create_sub_list_table(societyId, htmlStr));
			} else if(HttpStatus.OK == jqXHR.status) {

				for(var key in dataOrError.subscriptionList) {
					htmlStr += '<tr>' + 
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionStartDate'].split("-").reverse().join("-") + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionEndDate'].split("-").reverse().join("-") + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionType'] + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionStatus'] + '</td>' +
							  	'<td>' + ((null == dataOrError.subscriptionList[key]['subscriptionAmount']) 
										? '0' :dataOrError.subscriptionList[key]['subscriptionAmount']) + '</td>' +
							  	'<td>Edit</td>' +
							  '</tr>';
				}
				$("#subscriptionListClass_" + societyId).html(create_sub_list_table(societyId, htmlStr));
			} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
				//alert('BAD');
			}
		}, 'GET');	
		
		chain.next();
		
		return false;
	},
	collapse: function (event, chain) {
		console.log("collapsed");
		
		chain.next();
	}
});

$(".modal-btn").click( function() {
	
	subscriptionId = $(this).attr("data-subscriptionId");
	
	$("#subscriptionStartDate").val("");
	$("#subscriptionEndDate").val("");
	$("#subscriptionStatus").val("");
	$("#subscriptionType").val("");
	$("#subscriptionDuration").val("");
	$("#subscriptionAmount").val("");
	$("#paidAmount").val("");
	$("#balanceAmount").val("");
	$("#transactionAmount").val("");
	$("#transactionType").val("");
	$("#transactionDetail").val("");
	
	$(':input').attr("disabled", false);
	
	if("transaction" == $(this).attr("data-btnType")) {
		$("#subscriptionTitle").html("Subscription Payment");
		$("#subscriptionEndDateContainer").removeClass("d-none");
		$("#subscriptionStatusContainer").removeClass("d-none");
		
		$("#subscriptionStartDate").attr("disabled", true);
		$("#subscriptionEndDate").attr("disabled", true);
		$("#subscriptionStatus").attr("disabled", true);
		$("#subscriptionType").attr("disabled", true);
		$("#subscriptionDuration").attr("disabled", true);
		$("#subscriptionAmount").attr("disabled", true);
		$("#paidAmount").attr("disabled", true);
		$("#balanceAmount").attr("disabled", true);
	
		ajax("/society/getSubscriptionTransaction?subscriptionId="+subscriptionId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.NO_CONTENT == jqXHR.status) {
				$("#formError").html("No Transaction Found!");
				$('#modal').modal('hide');
			} else if(HttpStatus.OK == jqXHR.status) {
				$("#subscriptionStartDate").val(dataOrError["subscriptionTransaction"].subscriptionStartDateText);
				$("#subscriptionEndDate").val(dataOrError["subscriptionTransaction"].subscriptionEndDateText);
				$("#subscriptionType").val(dataOrError["subscriptionTransaction"].subscriptionType);
				$("#subscriptionStatus").val(dataOrError["subscriptionTransaction"].subscriptionStatus);
				$("#subscriptionDuration").val(dataOrError["subscriptionTransaction"].subscriptionDuration);
				$("#subscriptionAmount").val(dataOrError["subscriptionTransaction"].subscriptionAmount);
				$("#paidAmount").val(dataOrError["subscriptionTransaction"].paidAmount);
				$("#balanceAmount,#transactionAmount").val(dataOrError["subscriptionTransaction"].balanceAmount);
			} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
				//alert('BAD');
			}
		}, 'GET');	
	} else {
		$("#subscriptionTitle").html("Add Subscription");
		$("#subscriptionEndDateContainer").addClass("d-none");
		$("#subscriptionStatusContainer").addClass("d-none");
	}});

$("#subscriptionSubmit").click(function () {
	var formData = getFormData($("#subscriptionForm"));

	if(subscriptionId != 0) {
		formData.subscriptionId = subscriptionId;
	}
	
	preValidate();

	ajax("/subscription/save", function(jqXHR, textStatus, dataOrError) {
		console.log(dataOrError)
		if(HttpStatus.NO_CONTENT == jqXHR.status) {

		} else if(HttpStatus.OK == jqXHR.status) {
			
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			//alert('BAD');
		}
	}, 'PUT', formData);		

	return false;
});

$("#transactionType").change(function(){
	$("#transactionDetail").attr("disabled", true);
	$("#transactionDetail").val("");
	if(2 == $(this).val() || 3 == $(this).val()){
		$("#transactionDetail").attr("disabled", false);
	}
});
