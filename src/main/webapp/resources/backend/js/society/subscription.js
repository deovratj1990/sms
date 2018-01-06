var subscriptionEdit = false;
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
	
	var subscriptionId = $(this).attr("data-subscriptionId");
	$("#subscriptionStartDate").val("");
	$("#subscriptionEndDate").val("");
	$("#subscriptionType").val("");
	$("#subscriptionStatus").val("");
	$("#subscriptionAmount").val("0");

	ajax("/subscription/getBySubscriptionId?subscriptionId=" + subscriptionId, function(jqXHR, textStatus, dataOrError) {
		if(HttpStatus.NO_CONTENT == jqXHR.status) {
			htmlStr = 'No Subscription Found';
			$("#subscriptionFormClass_" + subscriptionId).html(htmlStr);
		} else if(HttpStatus.OK == jqXHR.status) {
			$("#subscriptionStartDate").val(dataOrError.subscriptionStartDate.split("-").reverse().join("-"));
			$("#subscriptionEndDate").val(dataOrError.subscriptionEndDate.split("-").reverse().join("-"));
			$("#subscriptionType").val(dataOrError.subscriptionType);
			$("#subscriptionStatus").val(dataOrError.subscriptionStatus);
			((null == dataOrError.subscriptionAmount) 
			? $("#subscriptionAmount").val("0")
			:$("#subscriptionAmount").val(dataOrError.subscriptionAmount));
		} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
			//alert('BAD');
		}
	}, 'GET');		
	
});

$("#subscriptionSubmit").click(function () {
	var formData = getFormData($("#subscriptionForm"));

	if(subscriptionEdit == true) {
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
