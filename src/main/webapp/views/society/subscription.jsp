<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title" id="subscriptionTitle"></h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			<form class="form-horizontal" id="subscriptionForm">
				<div class="modal-body">
					<div class="text-center msg hidden mt-2" id="formError"></div>
					<div class="form-group row">
						<label class="control-label col-sm-5" for="subscriptionStartDate">Subscription
							Date:</label>
						<div class="col-sm-7">
							<input type="text" class="form-control"
								id="subscriptionStartDate" name="subscriptionStartDate"
								placeholder="Enter Subscription Date" />
							<div class="text-danger msg" id="subscriptionStartDateError"></div>
						</div>
					</div>
					<div class="form-group row" id="subscriptionEndDateContainer">
						<label class="control-label col-sm-5" for="subscriptionEndDate">Valid Till
							Date:</label>
						<div class="col-sm-7">
							<input type="text" class="form-control"
								id="subscriptionEndDate" name="subscriptionEndDate"
								placeholder="Enter End Date" />
							<div class="text-danger msg" id="subscriptionEndDateError"></div>
						</div>
					</div>
					<div class="form-group row" id="subscriptionStatusContainer">
						<label class="control-label col-sm-5" for="subscriptionStatus">Subscription Status:</label>
						<div class="col-sm-7">
							<select class="form-control" id="subscriptionStatus"
								name="subscriptionStatus">
								<option value="">-Status-</option>
								<option value="1">PAYMENT PENDING</option>
								<option value="2">PARTIAL PAYMENT</option>
								<option value="3">INACTIVE</option>
								<option value="4">EXPIRED</option>
								<option value="5">ACTIVE</option>
							</select>
							<div class="text-danger msg" id="subscriptionStatusError"></div>
						</div>
					</div>
					<div class="form-group row">
						<label class="control-label col-sm-5 col-xs-12"
							for="subscriptionType">Subscription:</label>
						<div class="col-sm-3 col-xs-4">
							<select class="form-control" id="subscriptionType"
								name="subscriptionType">
								<option value="">-Type-</option>
								<option value="1">Free</option>
								<option value="2">Paid</option>
							</select>
							<div class="text-danger msg" id="subscriptionTypeError"></div>
						</div>
						<div class="col-sm-4 col-xs-4">
							<select class="form-control" id="subscriptionDuration"
								name="subscriptionDuration">
								<option value="">-Duration-</option>
								<option value="12">1 Year</option>
								<option value="24">2 Year</option>
								<option value="36">3 Year</option>
								<option value="48">4 Year</option>
								<option value="60">5 Year</option>
							</select>
							<div class="text-danger msg" id="subscriptionDurationError"></div>
						</div>
					</div>
					<div class="form-group row">
						<label class="control-label col-sm-5 col-xs-12"
							for="subscriptionAmount">Subscription Amt:</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" id="subscriptionAmount"
								name="subscriptionAmount" placeholder="Subscription Amount"
								 />
							<div class="text-danger msg" id="subscriptionAmountError"></div>
						</div>
					</div>
					<div class="form-group row">
						<label class="control-label col-sm-5 col-xs-12"
							for="paidAmount">Paid Amount:</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" id="paidAmount"
								name="paidAmount" placeholder="Paid Amount"
								 />
							<div class="text-danger msg" id="paidAmountError"></div>
						</div>
					</div>
					<div class="form-group row">
						<label class="control-label col-sm-5 col-xs-12"
							for="balanceAmount">Balance Amount:</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" id="balanceAmount"
								name="balanceAmount" placeholder="Balance Amount"
								 />
							<div class="text-danger msg" id="balanceAmountError"></div>
						</div>
					</div>
					<div class="form-group row">
						<label class="control-label col-sm-5 col-xs-12"
							for="transactionAmount">Paying Amount:</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" id="transactionAmount"
								name="transactionAmount" placeholder="Paying Amount" />
							<div class="text-danger msg" id="transactionAmountError"></div>
						</div>
					</div>
					<div class="form-group row">
						<label class="control-label col-sm-5 col-xs-12"
							for="transactionType">Payment Type:</label>
						<div class="col-sm-7">
							<select class="form-control" id="transactionType"
								name="transactionType">
								<option value="">-Type-</option>
								<option value="1">Cash</option>
								<option value="2">Cheque</option>
								<option value="3">Others</option>
							</select>
							<div class="text-danger msg" id="transactionTypeError"></div>
						</div>
					</div>
					<div class="form-group row">
						<label class="control-label col-sm-5 col-xs-12"
							for="transactionDetail">Payment Details:</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" id="transactionDetail"
								name="transactionDetail"
								placeholder="Bank / Branch / Chq Date / Chq No." />
							<div class="text-danger msg" id="transactionDetailError"></div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<input type="submit" class="btn btn-primary"
						id="subscriptionSubmit" name="subscriptionSubmit" value="Save" />
				</div>
			</form>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-sm-12 table-responsive" align="center">
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
							<td>${societyList.get(index).get('subscriptionStartDateText').asText()}</td>
							<td>${societyList.get(index).get('subscriptionEndDateText').asText()}</td>
							<td>${societyList.get(index).get('subscriptionTypeText').asText()}</td>
							<td>${societyList.get(index).get('subscriptionStatusText').asText()}</td>
							<td>
								<c:choose>
									<c:when test="${societyList.get(index).get('subscriptionStatus').asInt() == 1 
										|| societyList.get(index).get('subscriptionStatus').asInt() == 2}">
										<span class="modal-btn glyphicon glyphicon-piggy-bank"
										title="Make Payment" data-btnType="transaction"
										data-subscriptionId="${societyList.get(index).get('subscriptionId').asInt()}"
										data-toggle="modal" data-target="#myModal"></span>
									</c:when>
									<c:otherwise>
										<span class="modal-btn glyphicon glyphicon glyphicon-plus"
										title="Add Subscription" data-btnType="subscription"
										data-societyId="${societyList.get(index).get('societyId').asInt()}"
										data-toggle="modal" data-target="#myModal"></span>
									</c:otherwise>
								</c:choose>
								<span class="accordion-control glyphicon glyphicon-list"
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