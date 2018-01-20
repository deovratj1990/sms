<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
	<a class="navbar-brand" href="#">SMS ( Society Mgmt Sys)</a>
	<c:if test="${'login' != VIEW_NAME}">
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#collapsibleNavbar">
			<span class="navbar-toggler-icon"></span>
		</button>
	</c:if>

	<c:if test="${'login' != VIEW_NAME}">
		<div class="collapse navbar-collapse" id="collapsibleNavbar">
			<ul class="navbar-nav">
				<li class="nav-item"><a class="nav-link" href="#">Home</a></li>
				<li class="nav-item"><a class="nav-link"
					href="/admin/address/address">Address</a></li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Society</a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="/admin/society/registration">Registration</a>
						<a class="dropdown-item" href="/admin/society/subscription">Subscription</a>
					</div>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="logoutBtn" href="javascript:void(0);">Logout</a>
				</li>
			</ul>
		</div>
	</c:if>
</nav>