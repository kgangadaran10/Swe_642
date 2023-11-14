package swe642.hw3.webserver.api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PaginationMetadata {

    @JsonProperty("page")
    int page;
    @JsonProperty("pages")
    int pages;
    @JsonProperty("per_page")
    int perPage;

    PaginationMetadata(int page, int pages, int perPage) {
        this.page = page;
        this.pages = pages;
        this.perPage = perPage;
    }

}
