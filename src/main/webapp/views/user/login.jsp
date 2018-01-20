<div class="container-fluid mt-3 col-sm-6" align="center">
	<form class="form-horizontal" id="loginForm" name="loginForm"
		onsubmit="return false;">
		<div class="card">
			<div class="card-header">LOGIN</div>
			<div class="card-body">
				<div class="text-center msg hidden" id="formError"></div>
				<div class="form-group row">
					<div class="col-sm-4 col-lg-2 text-left p-0">
						<label class="col-form-label" for="userEmail">Email:</label>
					</div>
					<div class="col-sm-8 col-lg-6 text-left p-0">
						<input type="text" class="form-control" id="userEmail"
							name="userEmail" placeholder="Enter Email" autofocus />
					</div>
					<div class="msg hidden" id="userEmailError"></div>
				</div>
				<div class="form-group row">
					<div class="col-sm-4 col-lg-2 text-left p-0">
						<label class="col-form-label" for="userPassword">Password:</label>
					</div>
					<div class="col-sm-8 col-lg-6 text-left p-0">
						<input type="password" class="form-control" id="userPassword"
							name="userPassword" placeholder="Enter Password" autofocus />
					</div>
					<div class="msg hidden" id="userPasswordError"></div>
				</div>
			</div>
			<div class="card-footer">
				<input type="submit" class="btn btn-primary" id="loginSubmit"
					value="Login" />
			</div>
		</div>
	</form>
</div>

<script src="/resources/backend/js/user/login.js"></script>