
package com.sms.data;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "society_name",
    "country_name",
    "country_name_text",
    "state_name",
    "state_name_text",
    "city_name",
    "city_name_text",
    "pincode_name",
    "pincode_name_text",
    "society_wing_count",
    "secretary_wing",
    "secretary_room",
    "secretary_mobile",
    "code",
    "room_numbers"
})
public class SocietyRegRequest {

    @JsonProperty("society_name")
    private String societyName;
    @JsonProperty("country_name")
    private String countryName;
    @JsonProperty("country_name_text")
    private String countryNameText;
    @JsonProperty("state_name")
    private String stateName;
    @JsonProperty("state_name_text")
    private String stateNameText;
    @JsonProperty("city_name")
    private String cityName;
    @JsonProperty("city_name_text")
    private String cityNameText;
    @JsonProperty("pincode_name")
    private String pincodeName;
    @JsonProperty("pincode_name_text")
    private String pincodeNameText;
    @JsonProperty("society_wing_count")
    private String societyWingCount;
    @JsonProperty("secretary_wing")
    private String secretaryWing;
    @JsonProperty("secretary_room")
    private String secretaryRoom;
    @JsonProperty("secretary_mobile")
    private String secretaryMobile;
    @JsonProperty("code")
    private String code;
    @JsonProperty("room_numbers")
    private RoomNumbers roomNumbers;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	@JsonProperty("society_name")
    public String getSocietyName() {
        return societyName;
    }

    @JsonProperty("society_name")
    public void setSocietyName(String societyName) {
        this.societyName = societyName;
    }

    @JsonProperty("country_name")
    public String getCountryName() {
        return countryName;
    }

    @JsonProperty("country_name")
    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    @JsonProperty("country_name_text")
    public String getCountryNameText() {
        return countryNameText;
    }

    @JsonProperty("country_name_text")
    public void setCountryNameText(String countryNameText) {
        this.countryNameText = countryNameText;
    }

    @JsonProperty("state_name")
    public String getStateName() {
        return stateName;
    }

    @JsonProperty("state_name")
    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    @JsonProperty("state_name_text")
    public String getStateNameText() {
        return stateNameText;
    }

    @JsonProperty("state_name_text")
    public void setStateNameText(String stateNameText) {
        this.stateNameText = stateNameText;
    }

    @JsonProperty("city_name")
    public String getCityName() {
        return cityName;
    }

    @JsonProperty("city_name")
    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    @JsonProperty("city_name_text")
    public String getCityNameText() {
        return cityNameText;
    }

    @JsonProperty("city_name_text")
    public void setCityNameText(String cityNameText) {
        this.cityNameText = cityNameText;
    }

    @JsonProperty("pincode_name")
    public String getPincodeName() {
        return pincodeName;
    }

    @JsonProperty("pincode_name")
    public void setPincodeName(String pincodeName) {
        this.pincodeName = pincodeName;
    }

    @JsonProperty("pincode_name_text")
    public String getPincodeNameText() {
        return pincodeNameText;
    }

    @JsonProperty("pincode_name_text")
    public void setPincodeNameText(String pincodeNameText) {
        this.pincodeNameText = pincodeNameText;
    }

    @JsonProperty("society_wing_count")
    public String getSocietyWingCount() {
        return societyWingCount;
    }

    @JsonProperty("society_wing_count")
    public void setSocietyWingCount(String societyWingCount) {
        this.societyWingCount = societyWingCount;
    }

    @JsonProperty("secretary_wing")
    public String getSecretaryWing() {
        return secretaryWing;
    }

    @JsonProperty("secretary_wing")
    public void setSecretaryWing(String secretaryWing) {
        this.secretaryWing = secretaryWing;
    }

    @JsonProperty("secretary_room")
    public String getSecretaryRoom() {
        return secretaryRoom;
    }

    @JsonProperty("secretary_room")
    public void setSecretaryRoom(String secretaryRoom) {
        this.secretaryRoom = secretaryRoom;
    }

    @JsonProperty("secretary_mobile")
    public String getSecretaryMobile() {
        return secretaryMobile;
    }

    @JsonProperty("secretary_mobile")
    public void setSecretaryMobile(String secretaryMobile) {
        this.secretaryMobile = secretaryMobile;
    }

    @JsonProperty("code")
    public String getCode() {
        return code;
    }

    @JsonProperty("code")
    public void setCode(String code) {
        this.code = code;
    }

    @JsonProperty("room_numbers")
    public RoomNumbers getRoomNumbers() {
        return roomNumbers;
    }

    @JsonProperty("room_numbers")
    public void setRoomNumbers(RoomNumbers roomNumbers) {
        this.roomNumbers = roomNumbers;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
