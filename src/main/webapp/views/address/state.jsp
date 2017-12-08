<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="state_form" onsubmit="return false;">
		<div class="form-group">
			<label class="control-label col-sm-4" for="countryId">Country:</label>
			<div class="col-sm-4">
				<select class="form-control" id="countryId" name="countryId">
					<option value="">-Select-</option>
					<c:if test="${countryList.size() > 0}">
						<c:forEach begin="0" end="${countryList.size() -1}" var="index">
							<option value="${countryList.get(index).get("countryId").asInt()}">${countryList.get(index).get("countryName").asText()}</option>
						</c:forEach>
					</c:if>
				</select>
			</div>
			<div class="clearfix"></div>
			<div class="col-sm-4"></div>
			<div class="col-sm-4 text-danger" id="countryIdError"></div>
		</div>
		<div class="form-group">
			<label class="control-label col-sm-4" for="stateName">State
				Name:</label>
			<div class="col-sm-4">
				<input type="text" class="form-control" id="stateName"
					name="stateName" placeholder="Enter state Name" autofocus>
			</div>
		</div>
		<div class="form-group" align="center">
			<div class="col-sm-offset-2 col-sm-8">
				<input type="submit" class="btn btn-default" id="state_submit"
					value="Save" />
			</div>
		</div>
	</form>
</div>
<div class="row">
	<div class="col-sm-12" align="center">
		<p>State List</p>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<!-- <th width="15%">Sr No.</th>-->
					<th width="35%">Country</th>
					<th width="35%">State</th>
					<th width="15%">Modify</th>
					<th width="15%">Delete</th>
				</tr>
			</thead>
			<tbody id="stateListBody">
				<c:if test="${stateList.size() > 0}">
					<c:forEach begin="0" end="${stateList.size() -1}" var="index"
						varStatus="cntr">
						<tr id="state_${stateList.get(index).get("stateId").asInt()}">
							<td></td>
							<td>${stateList.get(index).get("stateName").asText()}</td>
							<td><a href="javascript:void(0);"
								onClick="getstateEdit(${stateList.get(index).get("stateId").asInt()})">Edit</a></td>
							<td><a href="javascript:void(0);">Delete</a></td>
						</tr>
					</c:forEach>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/backend/js/state.js"></script>
