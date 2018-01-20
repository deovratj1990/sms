<!DOCTYPE html>
<html lang="en">
<jsp:include page="../common/head.jsp" />
<body leftmargin="0" bottommargin="0" topmargin="0" rightmargin="0">
	<script src="/resources/common/js/jquery.min.js"></script>
	<script src="/resources/common/js/popper.min.js"></script>
	<script src="/resources/common/js/bootstrap.min.js"></script>
	<script type="text/javascript">
		var config = {
			SERVICE_PROTOCOL : "${SERVICE_PROTOCOL}",
			SERVICE_HOST : "${SERVICE_HOST}",
			SERVICE_PORT : "${SERVICE_PORT}",
			SERVICE_BASE_URL : "${SERVICE_BASE_URL}",
			ADMIN_AUTH_COOKIE_NAME : "${ADMIN_AUTH_COOKIE_NAME}",
			ADMIN_LOGIN_URL : "${ADMIN_LOGIN_URL}",
			ADMIN_DASHBOARD_URL : "${ADMIN_DASHBOARD_URL}",
			getServiceUrl : function(url) {
				return this.SERVICE_BASE_URL + url;
			}
		};
	</script>
	<script src="../../resources/backend/js/global.js"></script>
	<jsp:include page="../common/header.jsp" />
	<div id="loader"
		style="display: none; position: fixed; top: 50%; left: 45%; padding: 2px; z-index:1;  width:64px; height:64px;">
		<img src='../../resources/common/img/loading4.gif' width="64" height="64" />
	</div>
	<jsp:include page="../${CONTROLLER_NAME}/${VIEW_NAME}.jsp" />
</body>
</html>