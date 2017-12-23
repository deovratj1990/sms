<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="pincode_form" onsubmit="return false;">
		<div class="text-center msg hidden" id="formError"></div>
		<div class="form-group">
			<label class="control-label col-sm-4" for="pincodeName">Pincode
				Name:</label>
			<div class="col-sm-4">
				<input type="text" class="form-control hidden" id="areaId"
					name="areaId" value="${area.get("areaId") }" />
				<input type="text" class="form-control" id="pincodeName"
					name="pincodeName" autofocus />
				<div class="text-danger msg" id="pincodeNameError"></div>
			</div>
		</div>
		<div class="form-group" align="center">
			<div class="col-sm-offset-2 col-sm-8">
				<input type="submit" class="btn btn-default" id="pincode_submit"
					value="Save" />
				<input type="button" class="btn btn-default" id="pincode_back" value="Back" onclick="location.assign('/admin/address/area?cityId=${area.get("cityId") }')" />
			</div>
		</div>
	</form>
</div>
<div class="row">
	<div class="col-sm-12" align="center">
		<p>Pincode List for Area - ${area.get("areaName")}</p>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<!-- <th width="15%">Sr No.</th>-->
					<th width="70%">Pincode</th>
					<th width="30%">Action</th>
				</tr>
			</thead>
			<tbody id="pincodeListBody">
				<c:if test="${pincodeList.size() > 0}">
					<c:forEach begin="0" end="${pincodeList.size() -1}" var="index"
						varStatus="cntr">
						<tr id="pincode_${pincodeList.get(index).get("pincodeId").asInt()}">
							<td>${pincodeList.get(index).get("pincodeName").asText()}</td>
							<td><a href="javascript:void(0);"
								onClick="getPincodeEdit(${pincodeList.get(index).get("pincodeId").asInt()})">Modify</a>
								 | <a href="/admin/address/locality?pincodeId=${pincodeList.get(index).get("pincodeId").asInt()}">View Locality</a></td>
						</tr>
					</c:forEach>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/backend/js/pincode.js"></script>
