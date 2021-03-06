function preValidate() {
	$('.msg').addClass('hidden');
	$(':input').css('border-color', "");
}


$("#loginSubmit").click(function(){
	var formData = getFormData($("#loginForm"));
	
	preValidate();

	ajax("/user/login", function(jqXHR, textStatus, dataOrError){
		console.log(dataOrError);

		if(HttpStatus.OK == jqXHR.status) {
			cookie.set(config.ADMIN_AUTH_COOKIE_NAME, dataOrError.accessToken, 1);
			location.assign(config.ADMIN_DASHBOARD_URL);
		} else {
			$("#loginFormError").html(dataOrError['form']);
			for(var key in dataOrError) {
				$("#" + key + "Error").addClass("text-danger").html(dataOrError[key]).removeClass('hidden');
				$("#" + key).css("border-color","#F00");
			}			
		}
	}, "POST", formData);
});
