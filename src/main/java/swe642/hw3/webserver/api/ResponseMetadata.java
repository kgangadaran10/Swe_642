/*
 * Contributors:
 * - Josh Marsden
 */

package swe642.hw3.webserver.api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseMetadata<T> {

    @JsonProperty("success")
    private boolean success;
    @JsonProperty("data")
    private T data;
    @JsonProperty("message")
    private String message;

    @JsonProperty("pagination")
    private PaginationMetadata pagination;

    /*
     * Use for successful response from server.
     */
    public ResponseMetadata(boolean success, T data) {
        this.success = success;
        this.data = data;
    }

    /*
     * Use to provide pagination on successful server response.
     */
    public ResponseMetadata(boolean success, T data, int page, int pages, int perPage) {
        this.success = success;
        this.data = data;
        this.pagination = new PaginationMetadata(page, pages, perPage);
    }

    /*
     * Use for failure response from server.
     */
    public ResponseMetadata(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    /*
     * Option to provide all parameters.
     */
    public ResponseMetadata(boolean success, T data, String message, int page, int pages, int perPage) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.pagination = new PaginationMetadata(page, pages, perPage);
    }
}
