<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>SMS</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/resources/common/css/bootstrap.min.css">
<script src="/resources/common/js/jquery.min.js"></script>
<script src="/resources/common/js/bootstrap.min.js"></script>
</head>
<body>
	<%@include file="../common/header.jsp"%>

	<div class="container">
		<div class="row">
			<div class="col-sm-12" align="center">
				<p>LOGIN</p>
				<form class="form-horizontal" id="login_form" onsubmit="return false;">
					<div class="form-group">
				        <label class="control-label col-sm-4" for="email">Email:</label>
				        <div class="col-sm-4">
				          <input type="text" class="form-control" id="email" name="email" placeholder="Enter Email" autofocus />
				        </div>
					</div>
					<div class="form-group">
				        <label class="control-label col-sm-4" for="password">Password:</label>
				        <div class="col-sm-4">
				          <input type="password" class="form-control" id="password" name="password" placeholder="Enter Password" autofocus />
				        </div>
					</div>
					<div class="form-group">
				        <div class="col-sm-12 text-center">
							<input type="Submit" class="btn btn-default" id="country_submit" value="Login" />
				        </div>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>
