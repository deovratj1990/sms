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
					<th width="20%">Locality</th>
					<th width="10%">Registered</th>
					<th width="10%">Valid Till</th>
					<th width="10%">Type</th>
					<th width="10%">Status</th>
					<th width="20%">Action</th>
				</tr>
			</thead>
			<tbody id="societyListBody">
				<c:if test="${societyList.size() > 0}">
					<c:forEach begin="0" end="${societyList.size() - 1}" var="index" varStatus="cntr">
						<tr id="subscription_${cntr.count}" class="accordion-toggle" data-toggle="collapse" 
						data-parent="#OrderPackages" data-target=".subscription_detail_${cntr.count}">
							<td>${societyList.get(index).get("societyName").asText()}</td>
							<td>${societyList.get(index).get("pincodeName").asText()} - ${societyList.get(index).get("localityName").asText()}</td>
							<td>${societyList.get(index).get("subscriptionPeriodStartDate").asText()}</td>
							<td>${societyList.get(index).get("subscriptionPeriodEndDate").asText()}</td>
							<td>${societyList.get(index).get("subscriptionPeriodType").asText()}</td>
							<td>${societyList.get(index).get("subscriptionPeriodStatus").asText()}</td>
							<td>${societyList.get(index).get("countryName").asText()}</td>
						</tr>
						<tr>
							<td colspan="7" class="hiddenRow">
								<div class="accordion-body collapse subscription_detail_${cntr.count}" id="accordion${cntr.count}">
									<table class="table table-hover table-striped">
										<thead>
											<tr>
												<th width="20%">Name</th>
												<th width="20%">Locality</th>
												<th width="10%">Registered</th>
												<th width="10%">Valid Till</th>
												<th width="10%">Type</th>
												<th width="10%">Status</th>
												<th width="20%">Action</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
						<tr class="hiddenRow"></tr>
					</c:forEach>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/backend/js/society/subscription.js"></script>
