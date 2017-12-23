<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="city_form" onsubmit="return false;">
		<div class="text-center msg hidden" id="formError"></div>
		<div class="form-group">
			<label class="control-label col-sm-4" for="cityName">City
				Name:</label>
			<div class="col-sm-4">
				<input type="text" class="form-control hidden" id="stateId"
					name="stateId" value="${state.get("stateId") }" />
				<input type="text" class="form-control" id="cityName"
					name="cityName" autofocus />
				<div class="text-danger msg" id="cityNameError"></div>
			</div>
		</div>
		<div class="form-group" align="center">
			<div class="col-sm-offset-2 col-sm-8">
				<input type="submit" class="btn btn-default" id="city_submit"
					value="Save" />
				<input type="button" class="btn btn-default" id="city_back" value="Back" onclick="location.assign('/admin/address/state?countryId=${state.get("countryId") }')" />
			</div>
		</div>
	</form>
</div>
<div class="row">
	<div class="col-sm-12" align="center">
		<p>City List for State - ${state.get("stateName")}</p>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<!-- <th width="15%">Sr No.</th>-->
					<th width="70%">City</th>
					<th width="30%">Action</th>
				</tr>
			</thead>
			<tbody id="cityListBody">
				<c:if test="${cityList.size() > 0}">
					<c:forEach begin="0" end="${cityList.size() -1}" var="index"
						varStatus="cntr">
						<tr id="city_${cityList.get(index).get("cityId").asInt()}">
							<td>${cityList.get(index).get("cityName").asText()}</td>
							<td><a href="javascript:void(0);"
								onClick="getcityEdit(${cityList.get(index).get("cityId").asInt()})">Modify</a>
								 | <a href="/admin/address/area?cityId=${cityList.get(index).get("cityId").asInt()}">View Area</a></td>
						</tr>
					</c:forEach>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/backend/js/city.js"></script>
