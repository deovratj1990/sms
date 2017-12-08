<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col-sm-12" align="center">
	<form class="form-horizontal" id="country_form"
		onsubmit="return false;">
		<div class="form-group">
			<label class="control-label col-sm-4" for="countryName">Country
				Name:</label>
			<div class="col-sm-4">
				<input type="text" class="form-control" id="countryName"
					name="countryName" placeholder="Enter Country Name" autofocus>
			</div>
		</div>
		<div class="form-group" align="center">
			<div class="col-sm-offset-2 col-sm-8">
				<input type="Submit" class="btn btn-default" id="country_submit"
					value="Save" />
			</div>
		</div>
	</form>
</div>
<div class="row">
	<div class="col-sm-12" align="center">
		<p>Country List</p>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<!-- <th width="15%">Sr No.</th>-->
					<th width="70%">Country</th>
					<th width="15%">Modify</th>
					<th width="15%">Delete</th>
				</tr>
			</thead>
			<tbody id="countryListBody">
				<c:if test="${countryList.size() > 0}">
					<c:forEach begin="0" end="${countryList.size() - 1}" var="index"
						varStatus="cntr">
						<tr id="country_${countryList.get(index).get("countryId").asInt()}">
							<!-- <td>${cntr.count}</td>-->
							<td>${countryList.get(index).get("countryName").asText()}</td>
							<td><a href="javascript:void(0);"
								onClick="getCountryEdit(${countryList.get(index).get("countryId").asInt()})">Edit</a></td>
							<td><a href="javascript:void(0);">Delete</a></td>
						</tr>
					</c:forEach>
				</c:if>
			</tbody>
		</table>
	</div>
</div>
<script src="/resources/backend/js/country.js"></script>
