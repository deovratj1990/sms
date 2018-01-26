var subscriptionId = 0;

//CAROUSEL FORM DATA CODE//----------------------------------------------------------------------
$("body").on("click", "span.carousel-next", function (){
	console.log($(this));

	var getCarouselContainer = $(this).attr("data-callCarousel");
	var callerId = $(this).attr("data-callerId");
	var callerName = $(this).attr("data-callerName");
	
	if("subscription" == getCarouselContainer) {
		$('#carouselContainer').carousel('next');

		societyId = callerId;
		$("#subscriptionListHeader").html(callerName);
		ajax('/society/getSubscriptionBySocietyId?societyId='+societyId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.OK == jqXHR.status) {
				var tableContent="";		
				for(var key in dataOrError.subscriptionList) {
					console.log(dataOrError.subscriptionList[key]);
					tableContent += '<tr>' + 
									  	'<td>' + dataOrError.subscriptionList[key]['subscriptionStartDateText'] + '</td>' +
									  	'<td>' + dataOrError.subscriptionList[key]['subscriptionEndDateText'] + '</td>' +
									  	'<td>' + dataOrError.subscriptionList[key]['subscriptionTypeText'] + '</td>' +
									  	'<td>' + dataOrError.subscriptionList[key]['subscriptionStatusText'] + '</td>' +
									  	'<td>' + ((null == dataOrError.subscriptionList[key]['subscriptionAmount']) 
												? '0' :dataOrError.subscriptionList[key]['subscriptionAmount']) + '</td>' +
									  	'<td>' +
										  	'<span class="carousel-next glyphicon glyphicon-list" ' +
											'data-callCarousel="transaction" ' +
											'data-callerId="' + dataOrError.subscriptionList[key]['subscriptionId'] + '"  ' +
											'data-callerName="' + dataOrError.subscriptionList[key]['subscriptionStartDateText'] + 
											dataOrError.subscriptionList[key]['subscriptionEndDateText'] +
											'" title="View Transactions"></span> ' +
										'</td>' +
									 '</tr>';
				}
				$("#subscriptionListBody").html(tableContent);
			} else if(HttpStatus.NO_CONTENT == jqXHR.status) {
				tableContent = '<tr>' + 
								  	'<td colspan="6" align="center" class="text-danger">No Subscription Found!</td>' +
								  '</tr>';
				$("#subscriptionListBody").html(tableContent);
			} else {
				alert("Something went wrong. Please try again later!");
				return false;
			}
		}, 'GET');	
	} else if("transaction" == getCarouselContainer) {
		$('#carouselContainer').carousel('next');

		subscriptionId = callerId;
		$("#transactionListHeader").html(callerName);
		
		ajax('/society/getSubscriptionTransaction?subscriptionId='+subscriptionId, function(jqXHR, textStatus, dataOrError) {
			if(HttpStatus.OK == jqXHR.status) {
				var tableContent="";		
				for(var key in dataOrError) {
					tableContent += '<tr>' + 
				  	'<td>' + dataOrError.subscriptionList[key]['transactionDateText'] + '</td>' +
				  	'<td>' + ((null == dataOrError.subscriptionList[key]['transactionAmount']) 
							? '0' :dataOrError.subscriptionList[key]['transactionAmount']) + '</td>' +
				  	'<td>' + dataOrError.subscriptionList[key]['transactionTypeText'] + '</td>' +
				  	'<td>' + dataOrError.subscriptionList[key]['transactionStatusText'] + '</td>' +
				  	'<td>' + dataOrError.subscriptionList[key]['transactionDetail'] + '</td>' +
				  	'<td>' +
					  	'<span class="delete-transaction glyphicon glyphicon-delete" ' +
						'data-transactionId="'+dataOrError.subscriptionList[key]['transactionId']+'" ' +
						'title="Delete Transactions"></span> ' +
					'</td>' +
				 '</tr>';
				}
				$("#transactionListBody").html(tableContent);
			} else if(HttpStatus.NO_CONTENT == jqXHR.status) {
				tableContent = '<tr>' + 
								  	'<td colspan="6" align="center" class="text-danger">No Subscription Found!</td>' +
								  '</tr>';
				$("#transactionListBody").html(tableContent);
			} else {
				alert("Something went wrong. Please try again later!");
				return false;
			}
		}, 'GET');	
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