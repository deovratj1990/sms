<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="container-fluid" align="center">
	<div id="slider-page-1" class="slider-page" style="left:0%;">

		<div class="col-lg-6 mt-3 p-0 m-0">
			<form class="form-horizontal" id="country_form"
				onsubmit="return false;">
				<div class="text-center msg hidden" id="formError"></div>
				<div class="card">
					<div class="card-header">COUNTRY FORM</div>
					<div class="card-body">
						<div class="text-center msg hidden" id="formError"></div>
						<div class="form-group row">
							<div class="col-sm-3 col-lg-3"></div>
							<div class="col-sm-2 col-lg-2 text-left p-0">
								<label class="col-form-label text-right" for="countryName">Country
									Name :</label>
							</div>
							<div class="col-sm-4 col-lg-4 text-left p-0">
								<input type="text" class="form-control" id="countryName"
									name="countryName" autofocus>
							</div>
							<div class="msg hidden" id="countryNameError"></div>
						</div>
					</div>
					<div class="card-footer">
						<input type="Submit" class="btn btn-primary" id="country_submit"
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
								<c:forEach begin="0" end="${countryList.size() - 1}" var="index"
									varStatus="cntr">
									<tr
										id="country_${countryList.get(index).get('countryId').asInt()}">
										<!-- <td>${cntr.count}</td>-->
										<td>${countryList.get(index).get("countryName").asText()}</td>
										<td><span
											class="btn-country-edit glyphicon glyphicon glyphicon-pencil"
											title="Edit Country"
											onclick="getCountryEdit('${countryList.get(index).get('countryId').asInt()}')"></span>
											<span class="next-slider-page glyphicon glyphicon glyphicon-list"  data-sliderPageId="slider-page-1"
											title="View States"></span>
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

	<div id="slider-page-2" class="slider-page">

		<div class="col-lg-6 mt-3 p-0 m-0">
			<form class="form-horizontal" id="country_form"
				onsubmit="return false;">
				<div class="text-center msg hidden" id="formError"></div>
				<div class="card">
					<div class="card-header">COUNTRY FORM 2</div>
					<div class="card-body">
						<div class="text-center msg hidden" id="formError"></div>
						<div class="form-group row">
							<div class="col-sm-3 col-lg-3"></div>
							<div class="col-sm-2 col-lg-2 text-left p-0">
								<label class="col-form-label text-right" for="countryName">Country
									Name :</label>
							</div>
							<div class="col-sm-4 col-lg-4 text-left p-0">
								<input type="text" class="form-control" id="countryName"
									name="countryName" autofocus>
							</div>
							<div class="msg hidden" id="countryNameError"></div>
						</div>
					</div>
					<div class="card-footer">
						<input type="Submit" class="btn btn-primary" id="country_submit"
							value="Save" />
						<input type="Submit" class="prev-slider-page btn btn-primary" id="country_submit" data-sliderPageId="slider-page-2"
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
								<c:forEach begin="0" end="${countryList.size() - 1}" var="index"
									varStatus="cntr">
									<tr
										id="country_${countryList.get(index).get('countryId').asInt()}">
										<!-- <td>${cntr.count}</td>-->
										<td>${countryList.get(index).get("countryName").asText()}</td>
										<td><span
											class="btn-country-edit glyphicon glyphicon glyphicon-pencil"
											title="Edit Country"
											onclick="getCountryEdit('${countryList.get(index).get('countryId').asInt()}')"></span>
											<span class="glyphicon glyphicon glyphicon-list"
											title="View States"
											onclick="location.assign('/admin/address/state?countryId=${countryList.get(index).get("countryId").asInt()}')"></span>
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


</div>
<script src="/resources/backend/js/address/country.js"></script>
<script src="/resources/common/js/sliderPage.js"></script>