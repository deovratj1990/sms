<!DOCTYPE html>
<html lang="en">
<jsp:include page="../common/head.jsp" />
<body>
	<script src="/resources/common/js/jquery.min.js"></script>
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
	<script src="/resources/backend/js/common/common.js"></script>
	<jsp:include page="../common/header.jsp" />
	<jsp:include page="../${CONTROLLER_NAME}/${VIEW_NAME}.jsp" />
</body>
</html>
