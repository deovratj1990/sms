var subscriptionPeriodEdit = false;
var subscriptionPeriodId = 0;
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
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodStartDate'].split("-").reverse().join("-") + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodEndDate'].split("-").reverse().join("-") + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodType'] + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodStatus'] + '</td>' +
							  	'<td>' + ((null == dataOrError.subscriptionList[key]['subscriptionPeriodAmount']) 
										? '0' :dataOrError.subscriptionList[key]['subscriptionPeriodAmount']) + '</td>' +
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
	
	var subscriptionPeriodId = $(this).attr("data-subscriptionPeriodId");
	$("#subscriptionPeriodStartDate").val("");
	$("#subscriptionPeriodEndDate").val("");
	$("#subscriptionPeriodType").val("");
	$("#subscriptionPeriodStatus").val("");
	$("#subscriptionPeriodAmount").val("0");

	ajax("/subscriptionPeriod/getBySubscriptionPeriodId?subscriptionPeriodId=" + subscriptionPeriodId, function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.NO_CONTENT == jqXHR.status) {
			htmlStr = 'No Subscription Found';
			$("#subscriptionFormClass_" + subscriptionPeriodId).html(htmlStr);
		} else if(HttpStatus.OK == jqXHR.status) {
			$("#subscriptionPeriodStartDate").val(dataOrError.subscriptionPeriodStartDate.split("-").reverse().join("-"));
			$("#subscriptionPeriodEndDate").val(dataOrError.subscriptionPeriodEndDate.split("-").reverse().join("-"));
			$("#subscriptionPeriodType").val(dataOrError.subscriptionPeriodType);
			$("#subscriptionPeriodStatus").val(dataOrError.subscriptionPeriodStatus);
			((null == dataOrError.subscriptionPeriodAmount) 
			? $("#subscriptionPeriodAmount").val("0")
			:$("#subscriptionPeriodAmount").val(dataOrError.subscriptionPeriodAmount));
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			//alert('BAD');
		}
	}, 'GET');		
	
});

$("#subscriptionSubmit").click(function () {
	var formData = getFormData($("#subscriptionForm"));

	if(subscriptionPeriodEdit == true) {
		formData.subscriptionPeriodId = subscriptionPeriodId;
	}
	
	preValidate();

	ajax("/subscriptionPeriod/save", function(jqXHR, textStatus, dataOrError) {
		console.log(dataOrError)
		if(HttpStatus.NO_CONTENT == jqXHR.status) {

		} else if(HttpStatus.OK == jqXHR.status) {
			
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			//alert('BAD');
		}
	}, 'PUT', formData);		

	return false;
});
