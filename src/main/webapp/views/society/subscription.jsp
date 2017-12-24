<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="registrationForm">
		<div class="text-center msg hidden" id="formError"></div>
		<div class="form-group">
			<label class="control-label col-sm-4" for="subscriptionType">Subscription Type:</label>
			<div class="col-sm-4">
				<select class="form-control" id="subscriptionType" name="subscriptionType">
					<option value="">-Select-</option>
					<option value="1">Free</option>
					<option value="2">Paid</option>
				</select>
				<div class="text-danger msg" id="subscriptionTypeError"></div>
			</div>
		</div>
	</form>
</div>
<div class="row">
	<div class="col-sm-12" align="center">
		<p>Society List</p>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<th width="20%">Name</th>
					<th width="30%">Locality</th>
					<th width="10%">Registered</th>
					<th width="10%">Valid Till</th>
					<th width="10%">Type</th>
					<th width="20%">Action</th>
				</tr>
			</thead>
			<tbody id="societyListBody">
			</tbody>
		</table>
	</div>
</div><script src="/resources/backend/js/society/report.js"></script>