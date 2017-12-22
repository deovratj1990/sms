<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<nav class="navbar navbar-inverse">
	<div class="navbar-header">
		<c:if test="${'login' != VIEW_NAME}">
			<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target="#myNavbar">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</c:if>
		<a class="navbar-brand" href="#">SMS ( Society Mgmt Sys)</a>
	</div>
	<c:if test="${'login' != VIEW_NAME}">
		<div class="collapse navbar-collapse" id="myNavbar">
			<ul class="nav navbar-nav">
				<li><a href="#">Home</a></li>
				<li><a href="/admin/address/country">Address</a></li>
				<li class="dropdown"><a class="dropdown-toggle"
					data-toggle="dropdown" href="#">Society <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li class=""><a href="/admin/society/registration">Society
								Registration</a></li>
					</ul></li>
				<li><a id="logoutBtn" href="javascript:void(0);">Logout</a></li>
			</ul>
		</div>
	</c:if>
</nav>
