<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
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

<!-- Modal -->
<div class="modal fade" id="myModal" role="dialog">
	<div class="modal-dialog">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header bg-info">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Subscription Form</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" id="subscriptionForm">
					<div class="form-group">
						<label class="control-label col-sm-4" for="societyName">Subscription
							Date:</label>
						<div class="col-sm-6">
							<input type="text" class="form-control"
								id="subscriptionStartDate"
								name="subscriptionStartDate"
								placeholder="Enter Subscription Date">
							<div class="text-danger msg" id="societyNameError"></div>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"
							for="subscriptionEndDate">Valid Till:</label>
						<div class="col-sm-6">
							<input type="text" class="form-control"
								id="subscriptionEndDate" name="subscriptionEndDate"
								placeholder="Enter Valid Till">
							<div class="text-danger msg" id="subscriptionEndDateError"></div>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4" for="subscriptionType">Type:</label>
						<div class="col-sm-6">
							<select class="form-control" id="subscriptionType"
								name="subscriptionType">
								<option value="">-Select-</option>
								<option value="1">FREE</option>
								<option value="2">PAID</option>
							</select>
							<div class="text-danger msg" id="subscriptionTypeError"></div>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"
							for="subscriptionStatus">Status:</label>
						<div class="col-sm-6">
							<select class="form-control" id="subscriptionStatus"
								name="subscriptionStatus">
								<option value="">-Select-</option>
								<option value="1">PENDING</option>
								<option value="2">PAYMENT PENDING</option>
								<option value="3">PARTIAL PAYMENT</option>
								<option value="4">INACTIVE</option>
								<option value="5">EXPIRED</option>
								<option value="6">ACTIVE</option>
							</select>
							<div class="text-danger msg" id="subscriptionStatusError"></div>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"
							for="subscriptionAmount">Amount:</label>
						<div class="col-sm-6">
							<input type="text" class="form-control"
								id="subscriptionAmount" name="subscriptionAmount"
								placeholder="Enter Amount">
							<div class="text-danger msg" id="subscriptionAmountError"></div>
						</div>
					</div>
					<div class="form-group" align="center">
						<input type="submit" class="btn btn-default"
							id="subscriptionSubmit" name="subscriptionSubmit" value="Save" />
					</div>
				</form>
			</div>
		</div>
	</div>
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
					<c:forEach begin="0" end="${societyList.size() - 1}" var="index"
						varStatus="cntr">
						<tr>
							<td>${societyList.get(index).get("societyName").asText()}<span
								class="glyphicon glyphicon-pencil" title="Edit Society"></span>
							</td>
							<td>${societyList.get(index).get("localityName").asText()}-
								${societyList.get(index).get("pincodeName").asText()}</td>
							<td><fmt:parseDate
									value="${societyList.get(index).get('subscriptionStartDate').asText()}"
									var="subscriptionStartDate" pattern="yyyy-MM-dd" /> <fmt:formatDate
									pattern="dd-MM-yyyy" value="${subscriptionStartDate}" />
							</td>
							<td><fmt:parseDate
									value="${societyList.get(index).get('subscriptionEndDate').asText()}"
									var="subscriptionEndDate" pattern="yyyy-MM-dd" /> <fmt:formatDate
									pattern="dd-MM-yyyy" value="${subscriptionEndDate}" /></td>
							<td><c:choose>
									<c:when
										test="${societyList.get(index).get('subscriptionType').asInt() == 1}">Free</c:when>
									<c:otherwise>Paid</c:otherwise>
								</c:choose></td>
							<td><c:choose>
									<c:when
										test="${societyList.get(index).get('subscriptionStatus').asInt() == 1}">Pending</c:when>
									<c:when
										test="${societyList.get(index).get('subscriptionStatus').asInt() == 2}">Payment Pending</c:when>
									<c:when
										test="${societyList.get(index).get('subscriptionStatus').asInt() == 3}">Partial Payment</c:when>
									<c:when
										test="${societyList.get(index).get('subscriptionStatus').asInt() == 4}">Inactice</c:when>
									<c:when
										test="${societyList.get(index).get('subscriptionStatus').asInt() == 5}">Expired</c:when>
									<c:otherwise>Active</c:otherwise>
								</c:choose></td>
							<td><span class="modal-btn glyphicon glyphicon-pencil"
								title="Edit Subscription"
								data-subscriptionId="${societyList.get(index).get('subscriptionId').asInt()}"
								data-toggle="modal" data-target="#myModal"></span> <span
								class="accordion-control glyphicon glyphicon-list"
								title="View Subscription" data-accordionType="subscriptionList"
								data-societyId="${societyList.get(index).get('societyId').asInt()}"
								data-target="#subscriptionListClass_${societyList.get(index).get('societyId').asInt()}"></span>
							</td>
						</tr>
						<tr>
							<td colspan="7" class="hiddenRow">
								<div class="accordion-target"
									id="subscriptionListClass_${societyList.get(index).get('societyId').asInt()}">
								</div>
							</td>
						</tr>
					</c:forEach>
				</c:if>
				<c:if test="${societyList.size() == null}">
					<tr>
						<td colspan="7" class="text-danger text-center">No
							Subscription Found!</td>
					</tr>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/common/js/accordion.js"></script>
<script src="/resources/backend/js/society/subscription.js"></script>