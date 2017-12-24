<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="locality_form" onsubmit="return false;">
		<div class="text-center msg hidden" id="formError"></div>
		<div class="form-group">
			<label class="control-label col-sm-4" for="pilocalityme">Locality
				Name:</label>
			<div class="col-sm-4">
				<input type="text" class="form-control hidden" id="pincodeId"
					name="pincodeId" value="${pincode.get("pincodeId") }" />
				<input type="text" class="form-control" id="localityName"
					name="localityName" autofocus />
				<div class="text-danger msg" id="localityNameError"></div>
			</div>
		</div>
		<div class="form-group" align="center">
			<div class="col-sm-offset-2 col-sm-8">
				<input type="submit" class="btn btn-default" id="locality_submit"
					value="Save" />
				<input type="button" class="btn btn-default" id="locality_back" value="Back" onclick="location.assign('/admin/address/pincode?areaId=${pincode.get("areaId") }')" />
			</div>
		</div>
	</form>
</div>
<div class="row">
	<div class="col-sm-12" align="center">
		<p>Locality List for Pincode - ${pincode.get("pincodeName")}</p>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<!-- <th width="15%">Sr No.</th>-->
					<th width="70%">Locality</th>
					<th width="30%">Action</th>
				</tr>
			</thead>
			<tbody id="localityListBody">
				<c:if test="${localityList.size() > 0}">
					<c:forEach begin="0" end="${localityList.size() -1}" var="index"
						varStatus="cntr">
						<tr id="locality_${localityList.get(index).get("localityId").asInt()}">
							<td>${localityList.get(index).get("localityName").asText()}</td>
							<td><a href="javascript:void(0);" onClick="getLocalityEdit(${localityList.get(index).get("localityId").asInt()})">Modify</a></td>
						</tr>
					</c:forEach>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/backend/js/address/locality.js"></script>
