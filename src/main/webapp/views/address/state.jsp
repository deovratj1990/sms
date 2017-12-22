<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="state_form" onsubmit="return false;">
		<div class="text-center msg hidden" id="formError"></div>
		<div class="form-group">
			<label class="control-label col-sm-4" for="stateName">State
				Name:</label>
			<div class="col-sm-4">
				<input type="text" class="form-control hidden" id="countryId"
					name="countryId" value="${country.get("countryId") }" />
				<input type="text" class="form-control" id="stateName"
					name="stateName" autofocus />
				<div class="text-danger msg" id="stateNameError"></div>
			</div>
		</div>
		<div class="form-group" align="center">
			<div class="col-sm-offset-2 col-sm-8">
				<input type="submit" class="btn btn-default" id="state_submit"
					value="Save" />
				<input type="button" class="btn btn-default" id="state_back" value="Back" onclick="location.assign('/admin/address/country')" />
			</div>
		</div>
	</form>
</div>
<div class="row">
	<div class="col-sm-12" align="center">
		<p>State List for Country - ${country.get("countryName")}</p>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<!-- <th width="15%">Sr No.</th>-->
					<th width="35%">State</th>
					<th width="15%">Modify</th>
					<th width="15%">City</th>
				</tr>
			</thead>
			<tbody id="stateListBody">
				<c:if test="${stateList.size() > 0}">
					<c:forEach begin="0" end="${stateList.size() -1}" var="index"
						varStatus="cntr">
						<tr id="state_${stateList.get(index).get("stateId").asInt()}">
							<td>${stateList.get(index).get("stateName").asText()}</td>
							<td><a href="javascript:void(0);"
								onClick="getstateEdit(${stateList.get(index).get("stateId").asInt()})">Edit</a></td>
							<td><a href="/admin/address/city?stateId=${stateList.get(index).get("stateId").asInt()}">Add</a></td>
						</tr>
					</c:forEach>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/backend/js/state.js"></script>
