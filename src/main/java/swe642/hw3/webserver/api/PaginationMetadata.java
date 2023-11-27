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
 * PaginationMetadata class represents metadata for paginated responses.
 * It includes information such as page number, total pages, and items per page.
 * This class is designed to be used in conjunction with paginated API responses.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PaginationMetadata {

    // The current page number
    @JsonProperty("page")
    int page;

    // The total number of pages
    @JsonProperty("pages")
    int pages;

    // The number of items per page
    @JsonProperty("per_page")
    int perPage;

    /**
     * Constructor for PaginationMetadata class.
     *
     * @param page    The current page number.
     * @param pages   The total number of pages.
     * @param perPage The number of items per page.
     */
    PaginationMetadata(int page, int pages, int perPage) {
        this.page = page;
        this.pages = pages;
        this.perPage = perPage;
    }
}
