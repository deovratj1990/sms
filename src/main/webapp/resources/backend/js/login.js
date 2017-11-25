function preValidate() {
	$('.msg').addClass('hidden');
	$(':input').css('border-color', "");
}


$("#loginSubmit").click(function(){
	var formData = getFormData($("#loginForm"));
	
	preValidate();

	ajax("/user/login", function(jqXHR, textStatus, dataOrError){
		console.log(dataOrError);

		if(401 == jqXHR.status) {
			$("#loginFormError").html(dataOrError['form']);
			for(var key in dataOrError) {
				$("#" + key + "Error").addClass("text-danger").html(dataOrError[key]).removeClass('hidden');
				$("#" + key).css("border-color","#F00");
			}			
		} else {
			cookie.set("jwt", dataOrError.jwt, 1);
			//location.assign("/admin/");
		}
	}, "POST", formData);
});