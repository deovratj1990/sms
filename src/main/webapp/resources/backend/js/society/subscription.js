new Accordion("accordionSubscription",{
	onExpand: function ($accordionBtn, $accordionTarget) {
		console.log("expanded");
		var societyId = $accordionBtn.attr("data-societyId");
		
		var htmlStr = "";

		ajax("/society/getSubscriptionBySocietyId?societyId=" + societyId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.NO_CONTENT == jqXHR.status) {
				htmlStr = '<tr>' + 
						  	'<td colspan="6" align="center" class="text-danger">No Subscription Found!</td>' +
						  '</tr>';
				
				$("#subscriptionList_" + societyId).html(htmlStr);
			} else if(HttpStatus.OK == jqXHR.status) {

				for(var key in dataOrError.subscriptionList) {
					htmlStr += '<tr>' + 
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodStartDate'] + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodEndDate'] + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodType'] + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodStatus'] + '</td>' +
							  	'<td>' + dataOrError.subscriptionList[key]['subscriptionPeriodAmount'] + '</td>' +
							  	'<td>Edit</td>' +
							  '</tr>';
				}
				$("#subscriptionList_" + societyId).html(htmlStr);
			} else if(HttpStatus.BAD_REQUEST == jqXHR.status) {
				//alert('BAD');
			}
		}, 'GET');		
	},
	onCollapse: function ($accordionBtn, $accordionTarget) {
		console.log("collapsed");
	}
});