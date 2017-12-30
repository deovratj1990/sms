<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="registrationForm">
		<div class="text-center msg hidden" id="formError"></div>
		<div class="form-group">
			<label class="control-label col-sm-4" for="subscriptionType">Subscription
				Type:</label>
			<div class="col-sm-4">
				<select class="form-control" id="subscriptionType"
					name="subscriptionType">
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
		<table class="table table-striped table-hover">
			<thead>
				<tr class="text-primary">
					<th>Society</th>
					<th>Location</th>
					<th>ValidFrom</th>
					<th>ValidTill</th>
					<th>Type</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody id="accordionSubscription">
				<c:if test="${societyList.size() > 0}">
					<c:forEach begin="0" end="${societyList.size() - 1}" var="index" varStatus="cntr">
						<tr>
							<td>
								${societyList.get(index).get("societyName").asText()} 
								<span class="glyphicon glyphicon-pencil" title="Edit Society"></span>
							</td>
							<td>${societyList.get(index).get("localityName").asText()} - ${societyList.get(index).get("pincodeName").asText()}</td>
							<td>${societyList.get(index).get("subscriptionPeriodStartDate").asText()}</td>
							<td>${societyList.get(index).get("subscriptionPeriodEndDate").asText()}</td>
							<td>${societyList.get(index).get("subscriptionPeriodType").asText()}</td>
							<td>${societyList.get(index).get("subscriptionPeriodStatus").asText()}</td>
							<td>
								<span class="glyphicon glyphicon-pencil" title="Edit Subscription"></span>
								<span class="accordion-btn glyphicon glyphicon-list" title="View Subscription" 
								data-societyId="${societyList.get(index).get("societyId").asText()}" 
								data-target="#subscriptionListClass_${societyList.get(index).get("societyId").asText()}"></span>
							</td>
						</tr>
						<tr>
							<td colspan="7" class="hiddenRow">
								<div class="accordion-target" id="subscriptionListClass_${societyList.get(index).get("societyId").asText()}">
									<table class="table table-striped table-bordered table-hover" >
										<thead>
											<tr class="text-success">
												<th>ValidFrom</th>
												<th>ValidTill</th>
												<th>Type</th>
												<th>Status</th>
												<th>Amount</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody id="subscriptionList_${societyList.get(index).get("societyId").asText()}"></tbody>
									</table>
								</div>
							</td>
						</tr>
					</c:forEach>
				</c:if>
				<c:if test="${societyList.size() == null}">
					<tr>
						<td colspan="7" class="text-danger text-center">No Subscription Found!</td>
					</tr>				
				</c:if>
			</tbody>
		</table>
	</div>
	<script src="/resources/common/js/accordion.js"></script>
	<script src="/resources/backend/js/society/subscription.js"></script>