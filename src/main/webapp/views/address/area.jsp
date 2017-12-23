<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="area_form" onsubmit="return false;">
		<div class="text-center msg hidden" id="formError"></div>
		<div class="form-group">
			<label class="control-label col-sm-4" for="areaName">Area
				Name:</label>
			<div class="col-sm-4">
				<input type="text" class="form-control hidden" id="cityId"
					name="cityId" value="${city.get("cityId") }" />
				<input type="text" class="form-control" id="areaName"
					name="areaName" autofocus />
				<div class="text-danger msg" id="areaNameError"></div>
			</div>
		</div>
		<div class="form-group" align="center">
			<div class="col-sm-offset-2 col-sm-8">
				<input type="submit" class="btn btn-default" id="area_submit"
					value="Save" />
				<input type="button" class="btn btn-default" id="area_back" value="Back" onclick="location.assign('/admin/address/city?stateId=${city.get("stateId") }')" />
			</div>
		</div>
	</form>
</div>
<div class="row">
	<div class="col-sm-12" align="center">
		<p>Area List for City - ${city.get("cityName")}</p>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<!-- <th width="15%">Sr No.</th>-->
					<th width="70%">Area</th>
					<th width="30%">Action</th>
				</tr>
			</thead>
			<tbody id="areaListBody">
				<c:if test="${areaList.size() > 0}">
					<c:forEach begin="0" end="${areaList.size() -1}" var="index"
						varStatus="cntr">
						<tr id="area_${areaList.get(index).get("areaId").asInt()}">
							<td>${areaList.get(index).get("areaName").asText()}</td>
							<td><a href="javascript:void(0);"
								onClick="getAreaEdit(${areaList.get(index).get("areaId").asInt()})">Modify</a>
								 | <a href="/admin/address/pincode?areaId=${areaList.get(index).get("areaId").asInt()}">View Pincode</a></td>
						</tr>
					</c:forEach>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/backend/js/area.js"></script>
