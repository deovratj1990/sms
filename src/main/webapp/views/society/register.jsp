<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="container-fluid mt-3 mb-3 pl-3 pr-3 col-lg-8" align="center">
	<form class="form-horizontal" id="registrationForm">
		<div class="card">
			<div class="card-header text-center">SOCIETY REGISTRATION</div>
			<div class="card-body">
				<div class="text-center msg hidden mt-2" id="formError"></div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="societyName">Name:</label>
					<div class="col-lg-4 col-sm-4">
						<input type="text" class="form-control" id="societyName"
							name="societyName" placeholder="Enter Society Name" autofocus>
						<div class="text-danger msg" id="societyNameError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="countryId">Country:</label>
					<div class="col-lg-4 col-sm-4">
						<select class="form-control" id="countryId" name="countryId">
							<option value="">-Select-</option>
							<c:if test="${countryList.size() > 0}">
								<c:forEach begin="0" end="${countryList.size() - 1}" var="index">
									<option value="${countryList.get(index).get("countryId").asInt()}">${countryList.get(index).get("countryName").asText()}</option>
								</c:forEach>
							</c:if>
						</select>
						<div class="text-danger msg" id="countryIdError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="stateId">State:</label>
					<div class="col-lg-4 col-sm-4">
						<select class="form-control" id="stateId" name="stateId">
							<option value="">-Select-</option>
						</select>
						<div class="text-danger msg" id="stateIdError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="cityId">City:</label>
					<div class="col-lg-4 col-sm-4">
						<select class="form-control" id="cityId" name="cityId">
							<option value="">-Select-</option>
						</select>
						<div class="text-danger msg" id="cityIdError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="areaId">Area:</label>
					<div class="col-lg-4 col-sm-4">
						<select class="form-control" id="areaId" name="areaId">
							<option value="">-Select-</option>
						</select>
						<div class="text-danger msg" id="areaIdError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="pincodeId">Pincode:</label>
					<div class="col-lg-4 col-sm-4">
						<select class="form-control" id="pincodeId" name="pincodeId">
							<option value="">-Select-</option>
						</select>
						<div class="text-danger msg" id="pincodeIdError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="localityId">Locality:</label>
					<div class="col-lg-4 col-sm-4">
						<select class="form-control" id="localityId" name="localityId">
							<option value="">-Select-</option>
						</select>
						<div class="text-danger msg" id="localityIdError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="societyWingCount">Wings:</label>
					<div class="col-lg-4 col-sm-4">
						<input type="text" class="form-control" id="societyWingCount"
							name="societyWingCount" placeholder="Enter Wing Count"
							maxlength="2">
						<div class="text-danger msg" id="societyWingCountError"></div>
					</div>
				</div>
				<div id="wingForm"></div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="secretaryWing">Secretary:</label>
					<div class="col-sm-2">
						<select class="form-control" id="secretaryWing"
							name="secretaryWing">
							<option value="">-Wing-</option>
						</select>
						<div class="text-danger msg" id="secretaryWingError"></div>
					</div>
					<div class="col-sm-2">
						<select class="form-control" id="secretaryRoom"
							name="secretaryRoom">
							<option value="">-Room-</option>
						</select>
						<div class="text-danger msg" id="secretaryRoomError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left" for="secretaryMobile">Secretary
						Mobile:</label>
					<div class="col-lg-4 col-sm-4">
						<input type="text" class="form-control" id="secretaryMobile"
							name="secretaryMobile" placeholder="Enter Mobile">
						<div class="text-danger msg" id="secretaryMobileError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left col-xs-12"
						for="subscriptionType">Subscription:</label>
					<div class="col-sm-2 col-xs-6">
						<select class="form-control" id="subscriptionType"
							name="subscriptionType">
							<option value="">-Type-</option>
							<option value="1">Free</option>
							<option value="2">Paid</option>
						</select>
						<div class="text-danger msg" id="subscriptionTypeError"></div>
					</div>
					<div class="col-sm-2 col-xs-6">
						<select class="form-control" id="subscriptionDuration"
							name="subscriptionDuration" disabled="disabled">
							<option value="">-Duration-</option>
						</select>
						<div class="text-danger msg" id="subscriptionDurationError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left col-xs-12" for="roomAmount">Room
						Amount:</label>
					<div class="col-lg-4 col-sm-4">
						<input type="text" class="form-control" id="roomAmount"
							name="roomAmount" placeholder="Room Amount" disabled="disabled" />
						<div class="text-danger msg" id="roomAmountError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left col-xs-12"
						for="subscriptionAmount">Subscription Amount:</label>
					<div class="col-lg-4 col-sm-4">
						<input type="text" class="form-control" id="subscriptionAmount"
							name="subscriptionAmount" placeholder="Subscription Amount"
							disabled="disabled" />
						<div class="text-danger msg" id="subscriptionAmountError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left col-xs-12"
						for="transactionAmount">Paying Amount:</label>
					<div class="col-lg-4 col-sm-4">
						<input type="text" class="form-control" id="transactionAmount"
							name="transactionAmount" placeholder="Paying Amount"
							disabled="disabled" />
						<div class="text-danger msg" id="transactionAmountError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left col-xs-12"
						for="transactionType">Payment Type:</label>
					<div class="col-lg-4 col-sm-4">
						<select class="form-control" id="transactionType"
							name="transactionType" disabled="disabled">
							<option value="">-Type-</option>
							<option value="1">Cash</option>
							<option value="2">Cheque</option>
							<option value="3">Others</option>
						</select>
						<div class="text-danger msg" id="transactionTypeError"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-2 col-sm-2"></div>
					<label class="col-form-label col-lg-3 col-sm-3 text-left col-xs-12"
						for="transactionDetail">Payment Details:</label>
					<div class="col-lg-4 col-sm-4">
						<input type="text" class="form-control" id="transactionDetail"
							name="transactionDetail"
							placeholder="Bank / Branch / Chq Date / Chq No."
							disabled="disabled" />
						<div class="text-danger msg" id="transactionDetailError"></div>
					</div>
				</div>
			</div>
			<div class="card-footer" align="right">
				<input type="submit" class="btn btn-primary" id="registrationSubmit"
					value="Register" />

			</div>
		</div>
	</form>
</div>
<script src="/resources/backend/js/society/register.js"></script>
