<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>SMS</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/resources/common/css/bootstrap.min.css">
  <script src="/resources/common/js/jquery.min.js"></script>
  <script src="/resources/common/js/bootstrap.min.js"></script>
</head>
<body>
<%@include file="../common/header.jsp" %>
  
<div class="container">
  <div class="row">
    <div class="col-sm-12" align="middle">
    <form class="form-horizontal" id="registration_form" onsubmit="return false;">
      <div class="form-group">
        <label class="control-label col-sm-4" for="society_name">Name:</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="society_name" name="society_name" placeholder="Enter Society Name">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="country_name">Country:</label>
        <div class="col-sm-4">
          <select class="form-control" id="country_name" name="country_name">
          	<option value="">-Select-</option>
            <c:forEach begin="0" end="${countryList.size() - 1}" var="index">
            	<option value="${countryList.get(index).get("countryId").asInt()}">${countryList.get(index).get("countryName").asText()}</option>
			</c:forEach>
          </select>
        </div>
        <div class="col-sm-1">
          /
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="country_name_text" name="country_name_text" placeholder="Enter Country Name">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="state_name">State:</label>
        <div class="col-sm-4">
          <select class="form-control" id="state_name" name="state_name">
          	<option value="">-Select-</option>
          </select>
        </div>
        <div class="col-sm-1">
          /
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="state_name_text" name="state_name_text" placeholder="Enter State Name">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="city_name">City:</label>
        <div class="col-sm-4">
          <select class="form-control" id="city_name" name="city_name">
          	<option value="">-Select-</option>
          </select>
        </div>
        <div class="col-sm-1">
          /
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="city_name_text" name="city_name_text" placeholder="Enter City Name">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="pincode_name">Pincode:</label>
        <div class="col-sm-4">
          <select class="form-control" id="pincode_name" name="pincode_name">
          	<option value="">-Select-</option>
          </select>
        </div>
        <div class="col-sm-1">
          /
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="pincode_name_text" name="pincode_name_text" placeholder="Enter Pincode Name">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="locality_name">Locality:</label>
        <div class="col-sm-4">
          <select class="form-control" id="locality_name" name="locality_name7">
          	<option value="">-Select-</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="society_wing_count">Wings:</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="society_wing_count" name="society_wing_count" placeholder="Enter Wing Count">
        </div>
      </div>
      <div class="col-sm-12" id="wing_form">
        
      </div>
      <div class="hidden" id="secretary_info">
        <div class="form-group">
            <label class="control-label col-sm-4" for="secretary_wing">Secretary Wing:</label>
            <div class="col-sm-4" style="margin-top:5px;">
              <select class="form-control" id="secretary_wing" name="secretary_wing">
                <option>-Sel-</option>
              </select>
            </div>
          </fieldset>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-4" for="secretary_room">Secretary Room:</label>
          <div class="col-sm-4" style="margin-top:5px;">
            <select class="form-control" id="secretary_room" name="secretary_room">
              <option>-Sel-</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-4" for="secretary_mobile">Secretary Mobile:</label>
          <div class="col-sm-4" style="margin-top:5px;">
            <input type="text" class="form-control" id="secretary_mobile" name="secretary_mobile" placeholder="Enter Mobile">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Captcha:</label>
        <div class="col-sm-4"> 
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="code">Code:</label>
        <div class="col-sm-4"> 
          <input type="text" class="form-control" id="code" name="code" placeholder="Enter Code">
        </div>
      </div>
      <div class="form-group" align="middle"> 
        <div class="col-sm-offset-2 col-sm-8">
          <button type="button" class="btn btn-default" id="registration_submit">Submit</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
<script src="/resources/backend/js/register.js"></script>
</body>
</html>
