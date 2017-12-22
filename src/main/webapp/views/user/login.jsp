<div class="container-fluid">
	<div class="panel panel-default">
		<div class="panel-heading text-center">
			<strong>LOGIN</strong>
		</div>
		<div class="panel-body">
			<form class="form-horizontal" id="loginForm" name="loginForm" onsubmit="return false;">
				<div class="text-center msg hidden" id="formError"></div>
				<div class="form-group">
					<label class="control-label col-sm-4" for="userEmail">Email:</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" id="userEmail"
							name="userEmail" placeholder="Enter Email" autofocus />
					</div>
					<div class="col-sm-4 msg hidden" id="userEmailError"></div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-4" for="userPassword">Password:</label>
					<div class="col-sm-4">
						<input type="password" class="form-control" id="userPassword"
							name="userPassword" placeholder="Enter Password" autofocus />
					</div>
					<div class="col-sm-4 msg hidden" id="userPasswordError"></div>
				</div>
				<div class="form-group text-center">
					<input type="submit" class="btn btn-default" id="loginSubmit" value="Login" />
				</div>
			</form>
		</div>
	</div>
</div>
<script src="/resources/backend/js/login.js"></script>
