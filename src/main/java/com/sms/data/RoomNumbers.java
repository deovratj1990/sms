
package com.sms.data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "A1",
    "A2"
})
public class RoomNumbers {

    @JsonProperty("A1")
    private List<String> a1 = null;
    @JsonProperty("A2")
    private List<String> a2 = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("A1")
    public List<String> getA1() {
        return a1;
    }

    @JsonProperty("A1")
    public void setA1(List<String> a1) {
        this.a1 = a1;
    }

    @JsonProperty("A2")
    public List<String> getA2() {
        return a2;
    }

    @JsonProperty("A2")
    public void setA2(List<String> a2) {
        this.a2 = a2;
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
