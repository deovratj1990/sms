<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="container-fluid slider-container" align="center">
	<div id="sliderContainer" class="carousel slide pl-3 pr-3" data-ride="carousel" data-interval="false">
		<div class="carousel-inner">
			<div class="carousel-item active">
				<div class="col-lg-6 mt-3 p-0 m-0">
					<form class="form-horizontal" id="countryForm"
						onsubmit="return false;">
						<div class="card">
							<div class="card-header">COUNTRY FORM</div>
							<div class="card-body">
								<div class="text-center msg" id="countryFormError"></div>
								<div class="form-group row">
									<div class="col-sm-3 col-lg-3"></div>
									<div class="col-sm-2 col-lg-2 text-left p-0">
										<label class="col-form-label text-right" for="countryName">Country
											Name :</label>
									</div>
									<div class="col-sm-4 col-lg-4 text-left p-0">
										<input type="text" class="form-control" id="countryName"
											name="countryName" autofocus>
										<div class="msg text-danger" id="countryNameError"></div>
									</div>
								</div>
							</div>
							<div class="card-footer">
								<input type="Submit" class="btn btn-primary" id="countrySubmit"
									value="Save" />
							</div>
						</div>
					</form>
				</div>

				<div class="col-lg-12 mt-3 p-0 m-0">
					<div class="card">
						<div class="card-header">COUNTRY LIST</div>
						<div class="card-body table-responsive m-0 p-0">
							<table class="table table-hover table-striped m-0 p-0">
								<thead>
									<tr>
										<!-- <th width="15%">Sr No.</th>-->
										<th width="90%">Country</th>
										<th width="10%">Action</th>
									</tr>
								</thead>
								<tbody id="countryListBody">
									<c:if test="${countryList.size() > 0}">
										<c:forEach begin="0" end="${countryList.size() - 1}"
											var="index" varStatus="cntr">
											<tr
												id="country_${countryList.get(index).get('countryId').asInt()}">
												<!-- <td>${cntr.count}</td>-->
												<td>${countryList.get(index).get("countryName").asText()}</td>
												<td><span
													class="btn-country-edit glyphicon glyphicon-pencil"
													title="Edit Country"
													onclick="getCountryEdit('${countryList.get(index).get('countryId').asInt()}')"></span>
													<span class="carousel-next glyphicon glyphicon-list"
													data-callCarousel="state"
													data-callerId="${countryList.get(index).get('countryId').asInt()}" 
													data-callerName="${countryList.get(index).get('countryName').asText()}" title="View States"></span>
												</td>
											</tr>
										</c:forEach>
									</c:if>
								</tbody>
							</table>
						</div>
						<div class="card-footer"></div>
					</div>
				</div>
			</div>

			<div class="carousel-item">
				<!-- STATE COMPONENT  -->
				<div class="col-lg-6 mt-3 p-0 m-0">
					<form class="form-horizontal" id="stateForm"
						onsubmit="return false;">
						<div class="card">
							<div class="card-header">STATE FORM</div>
							<div class="card-body">
								<div class="text-center msg" id="stateFormError"></div>
								<div class="form-group row">
									<div class="col-sm-3 col-lg-3"></div>
									<div class="col-sm-2 col-lg-2 text-left p-0">
										<label class="col-form-label text-right" for="stateName">State
											Name :</label>
									</div>
									<div class="col-sm-4 col-lg-4 text-left p-0">
										<input type="text" class="form-control d-none" id="countryId"
											name="countryId"> <input type="text"
											class="form-control" id="stateName" name="stateName"
											autofocus>
										<div class="msg text-danger" id="stateNameError"></div>
									</div>
								</div>
							</div>
							<div class="card-footer">
								<input type="Submit" class="btn btn-primary" id="stateSubmit"
									value="Save" /> 
								<input type="button" class="btn btn-primary"
									onclick="$('#sliderContainer').carousel('prev')" role="button" data-slide="prev"
									value="Back" />
							</div>
						</div>
					</form>
				</div>

				<div class="col-lg-12 mt-3 p-0 m-0">
					<div class="card">
						<div class="card-header">
							STATE LIST FOR - <span id="stateListHeader"></span>
						</div>
						<div class="card-body table-responsive m-0 p-0">
							<table class="table table-hover table-striped m-0 p-0">
								<thead>
									<tr>
										<!-- <th width="15%">Sr No.</th>-->
										<th width="90%">State</th>
										<th width="10%">Action</th>
									</tr>
								</thead>
								<tbody id="stateListBody">
								</tbody>
							</table>
						</div>
						<div class="card-footer"></div>
					</div>
				</div>
			</div>

			<div class="carousel-item">
				<!-- CITY COMPONENT  -->
				<div class="col-lg-6 mt-3 p-0 m-0">
					<form class="form-horizontal" id="cityForm"
						onsubmit="return false;">
						<div class="card">
							<div class="card-header">CITY FORM</div>
							<div class="card-body">
								<div class="text-center msg" id="cityFormError"></div>
								<div class="form-group row">
									<div class="col-sm-3 col-lg-3"></div>
									<div class="col-sm-2 col-lg-2 text-left p-0">
										<label class="col-form-label text-right" for="cityName">City
											Name :</label>
									</div>
									<div class="col-sm-4 col-lg-4 text-left p-0">
										<input type="text" class="form-control d-none" id="stateId"
											name="stateId"> <input type="text"
											class="form-control" id="cityName" name="cityName" autofocus>
										<div class="msg text-danger" id="cityNameError"></div>
									</div>
								</div>
							</div>
							<div class="card-footer">
								<input type="Submit" class="btn btn-primary" id="citySubmit"
									value="Save" /> 
								<input type="button" class="btn btn-primary"
									onclick="$('#sliderContainer').carousel('prev')" role="button" data-slide="prev"
									value="Back" />
							</div>
						</div>
					</form>
				</div>

				<div class="col-lg-12 mt-3 p-0 m-0">
					<div class="card">
						<div class="card-header">
							CITY LIST FOR - <span id="cityListHeader"></span>
						</div>
						<div class="card-body table-responsive m-0 p-0">
							<table class="table table-hover table-striped m-0 p-0">
								<thead>
									<tr>
										<!-- <th width="15%">Sr No.</th>-->
										<th width="90%">City</th>
										<th width="10%">Action</th>
									</tr>
								</thead>
								<tbody id="cityListBody">
								</tbody>
							</table>
						</div>
						<div class="card-footer"></div>
					</div>
				</div>
			</div>

			<div class="carousel-item">
				<!-- AREA COMPONENT  -->
				<div class="col-lg-6 mt-3 p-0 m-0">
					<form class="form-horizontal" id="areaForm"
						onsubmit="return false;">
						<div class="card">
							<div class="card-header">AREA FORM</div>
							<div class="card-body">
								<div class="text-center msg" id="areaFormError"></div>
								<div class="form-group row">
									<div class="col-sm-3 col-lg-3"></div>
									<div class="col-sm-2 col-lg-2 text-left p-0">
										<label class="col-form-label text-right" for="areaName">Area
											Name :</label>
									</div>
									<div class="col-sm-4 col-lg-4 text-left p-0">
										<input type="text" class="form-control d-none" id="cityId"
											name="cityId"> <input type="text"
											class="form-control" id="areaName" name="areaName" autofocus>
										<div class="msg text-danger" id="areaNameError"></div>
									</div>
								</div>
							</div>
							<div class="card-footer">
								<input type="Submit" class="btn btn-primary" id="areaSubmit"
									value="Save" /> 
								<input type="button" class="btn btn-primary"
									onclick="$('#sliderContainer').carousel('prev')" role="button" data-slide="prev"
									value="Back" />
							</div>
						</div>
					</form>
				</div>

				<div class="col-lg-12 mt-3 p-0 m-0">
					<div class="card">
						<div class="card-header">
							AREA LIST FOR - <span id="areaListHeader"></span>
						</div>
						<div class="card-body table-responsive m-0 p-0">
							<table class="table table-hover table-striped m-0 p-0">
								<thead>
									<tr>
										<!-- <th width="15%">Sr No.</th>-->
										<th width="90%">Area</th>
										<th width="10%">Action</th>
									</tr>
								</thead>
								<tbody id="areaListBody">
								</tbody>
							</table>
						</div>
						<div class="card-footer"></div>
					</div>
				</div>
			</div>

			<div class="carousel-item">
				<!-- PINCODE COMPONENT  -->
				<div class="col-lg-6 mt-3 p-0 m-0">
					<form class="form-horizontal" id="pincodeForm"
						onsubmit="return false;">
						<div class="card">
							<div class="card-header">PINCODE FORM</div>
							<div class="card-body">
								<div class="text-center msg" id="pincodeFormError"></div>
								<div class="form-group row">
									<div class="col-sm-3 col-lg-3"></div>
									<div class="col-sm-2 col-lg-2 text-left p-0">
										<label class="col-form-label text-right" for="pincodeName">Pincode
											Name :</label>
									</div>
									<div class="col-sm-4 col-lg-4 text-left p-0">
										<input type="text" class="form-control d-none" id="areaId"
											name="areaId"> <input type="text"
											class="form-control" id="pincodeName" name="pincodeName"
											autofocus>
										<div class="msg text-danger" id="pincodeNameError"></div>
									</div>
								</div>
							</div>
							<div class="card-footer">
								<input type="Submit" class="btn btn-primary" id="pincodeSubmit"
									value="Save" /> 
								<input type="button" class="btn btn-primary"
									onclick="$('#sliderContainer').carousel('prev')" role="button" data-slide="prev"
									value="Back" />
							</div>
						</div>
					</form>
				</div>

				<div class="col-lg-12 mt-3 p-0 m-0">
					<div class="card">
						<div class="card-header">
							PINCODE LIST FOR - <span id="pincodeListHeader"></span>
						</div>
						<div class="card-body table-responsive m-0 p-0">
							<table class="table table-hover table-striped m-0 p-0">
								<thead>
									<tr>
										<!-- <th width="15%">Sr No.</th>-->
										<th width="90%">Pincode</th>
										<th width="10%">Action</th>
									</tr>
								</thead>
								<tbody id="pincodeListBody">
								</tbody>
							</table>
						</div>
						<div class="card-footer"></div>
					</div>
				</div>
			</div>

			<div class="carousel-item">
				<!-- LOCALITY COMPONENT  -->
				<div class="col-lg-6 mt-3 p-0 m-0">
					<form class="form-horizontal" id="localityForm"
						onsubmit="return false;">
						<div class="card">
							<div class="card-header">LOCALITY FORM</div>
							<div class="card-body">
								<div class="text-center msg" id="localityFormError"></div>
								<div class="form-group row">
									<div class="col-sm-3 col-lg-3"></div>
									<div class="col-sm-2 col-lg-2 text-left p-0">
										<label class="col-form-label text-right" for="localityName">Locality
											Name :</label>
									</div>
									<div class="col-sm-4 col-lg-4 text-left p-0">
										<input type="text" class="form-control d-none" id="pincodeId"
											name="pincodeId"> <input type="text"
											class="form-control" id="localityName" name="localityName"
											autofocus>
										<div class="msg text-danger" id="localityNameError"></div>
									</div>
								</div>
							</div>
							<div class="card-footer">
								<input type="Submit" class="btn btn-primary" id="localitySubmit"
									value="Save" /> 
								<input type="button" class="btn btn-primary"
									onclick="$('#sliderContainer').carousel('prev')" role="button" data-slide="prev"
									value="Back" />
							</div>
						</div>
					</form>
				</div>

				<div class="col-lg-12 mt-3 p-0 m-0">
					<div class="card">
						<div class="card-header">
							LOCALITY LIST FOR - <span id="localityListHeader"></span>
						</div>
						<div class="card-body table-responsive m-0 p-0">
							<table class="table table-hover table-striped m-0 p-0">
								<thead>
									<tr>
										<!-- <th width="15%">Sr No.</th>-->
										<th width="90%">Locality</th>
										<th width="10%">Action</th>
									</tr>
								</thead>
								<tbody id="localityListBody">
								</tbody>
							</table>
						</div>
						<div class="card-footer"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="/resources/backend/js/address/address.js"></script>
<script src="/resources/common/js/sliderPage.js"></script>