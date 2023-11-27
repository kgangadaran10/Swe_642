/*
 * Contributors:
 * - Josh Marsden
 * - Gangadaran Kameswaran
 */

package swe642.hw3.webserver.api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResponseMetadata class represents a standardized response structure for API responses.
 * It includes information about the success status, data payload, error message, and pagination metadata.
 *
 * @param <T> The type of data payload.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseMetadata<T> {

    // Indicates whether the operation was successful
    @JsonProperty("success")
    private boolean success;

    // The data payload of the response
    @JsonProperty("data")
    private T data;

    // An optional message providing additional information about the response
    @JsonProperty("message")
    private String message;

    // Pagination metadata for paginated responses
    @JsonProperty("pagination")
    private PaginationMetadata pagination;

    /**
     * Constructor for successful response from the server without pagination.
     *
     * @param success Indicates whether the operation was successful.
     * @param data    The data payload of the response.
     */
    public ResponseMetadata(boolean success, T data) {
        this.success = success;
        this.data = data;
    }

    /**
     * Constructor for successful response from the server with pagination.
     *
     * @param success  Indicates whether the operation was successful.
     * @param data     The data payload of the response.
     * @param page     The current page number.
     * @param pages    The total number of pages.
     * @param perPage  The number of items per page.
     */
    public ResponseMetadata(boolean success, T data, int page, int pages, int perPage) {
        this.success = success;
        this.data = data;
        this.pagination = new PaginationMetadata(page, pages, perPage);
    }

    /**
     * Constructor for failure response from the server.
     *
     * @param success Indicates whether the operation was successful (in the context of the response).
     * @param message An error message providing additional information.
     */
    public ResponseMetadata(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    /**
     * Constructor for a response with all parameters including data, message, and pagination.
     *
     * @param success Indicates whether the operation was successful.
     * @param data    The data payload of the response.
     * @param message An optional message providing additional information.
     * @param page    The current page number.
     * @param pages   The total number of pages.
     * @param perPage The number of items per page.
     */
    public ResponseMetadata(boolean success, T data, String message, int page, int pages, int perPage) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.pagination = new PaginationMetadata(page, pages, perPage);
    }
}