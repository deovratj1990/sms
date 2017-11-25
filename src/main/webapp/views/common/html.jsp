<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<jsp:include page="../common/head.jsp" />
<body>
	<script src="/resources/common/js/jquery.min.js"></script>
	<script src="/resources/common/js/bootstrap.min.js"></script>
	<script src="/resources/backend/js/common.js"></script>
	<jsp:include page="../common/header.jsp" />
	<jsp:include page="../${controllerName}/${viewName}.jsp" />
</body>
</html>