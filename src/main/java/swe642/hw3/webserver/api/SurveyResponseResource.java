/*
 * Contributors:
 * - Josh Marsden
 * - Gangadaran Kameswaran
 */

package swe642.hw3.webserver.api;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.ws.rs.BadRequestException;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import swe642.hw3.webserver.SurveyResponse;
import swe642.hw3.webserver.service.SurveyResponseService;

/**
 * RESTful resource for handling survey responses.
 */
@Path("/survey")
public class SurveyResponseResource {

    // Logger for logging messages
    Logger logger = LoggerFactory.getLogger(SurveyResponseResource.class);

    // Autowired service for handling survey responses
    @Autowired
    private SurveyResponseService surveyService;

    /**
     * Endpoint for creating a new survey response.
     *
     * @param surveyResponse The survey response data in JSON format.
     * @return Response indicating success or failure along with relevant data or error message.
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createResponse(@RequestBody SurveyResponse surveyResponse) {
        try {
            // Attempt to create a new survey response
            SurveyResponse response = surveyService.createResponse(surveyResponse);
            // Return a success response with the created survey response
            return Response.status(HttpStatus.OK.value()).entity(new ResponseMetadata<>(true, response)).build();
        } catch (BadRequestException e) {
            // Return a bad request response with an error message if the request is invalid
            return Response.status(HttpStatus.BAD_REQUEST.value()).entity(new ResponseMetadata<>(false, e.getMessage()))
                    .build();
        } catch (Exception e) {
            // Log unexpected errors and return an internal server error response
            logger.error("Unexpected error:", e);
            return Response.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .entity(new ResponseMetadata<>(false, "Unexpected database error"))
                    .build();
        }
    }

    /**
     * Endpoint for retrieving all survey responses.
     *
     * @return Response containing all survey responses or an error message in case of failure.
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllResponses() {
        try {
            // Return a success response with all survey responses
            return Response.status(HttpStatus.OK.value())
                    .entity(new ResponseMetadata<>(true, surveyService.getAllResponses()))
                    .build();
        } catch (Exception e) {
            // Log unexpected errors and return an internal server error response
            logger.error("Unexpected error:", e);
            return Response.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .entity(new ResponseMetadata<>(false, "Unexpected database error"))
                    .build();
        }
    }

    /**
     * Endpoint for retrieving a survey response by ID.
     *
     * @param id The ID of the survey response to retrieve.
     * @return Response containing the requested survey response or an error message if not found.
     */
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getResponseById(@PathParam("id") Long id) {
        try {
            // Attempt to retrieve a survey response by ID
            Optional<SurveyResponse> response = surveyService.getResponse(id);
            if (response.isPresent()) {
                // Return a success response with the requested survey response
                return Response.status(HttpStatus.OK.value()).entity(new ResponseMetadata<>(true, response.get()))
                        .build();
            } else {
                // Return a not found response if the survey response with the given ID is not found
                return Response.status(HttpStatus.NOT_FOUND.value())
                        .entity(new ResponseMetadata<>(false, "Could not find a Survey Response for that id"))
                        .build();
            }
        } catch (Exception e) {
            // Log unexpected errors and return an internal server error response
            logger.error("Unexpected error:", e);
            return Response.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .entity(new ResponseMetadata<>(false, "Unexpected database error"))
                    .build();
        }
    }

    /**
     * Endpoint for deleting a survey response by ID.
     *
     * @param id The ID of the survey response to delete.
     * @return Response indicating success or failure of the deletion.
     */
    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteResponse(@PathParam("id") Long id) {
        try {
            // Attempt to delete a survey response by ID
            surveyService.deleteResponse(id);
        } catch (Exception e) {
            // Log errors but do nothing because it's not critical if deletion fails
            logger.error("Error deleting survey response:", e);
        }
        // Return a success response indicating that the survey response was deleted
        return Response.status(HttpStatus.OK.value())
                .entity(new ResponseMetadata<>(true, "Deleted the Survey Response"))
                .build();
    }

    /**
     * Endpoint for deleting all survey responses.
     *
     * @return Response indicating success or failure of the deletion.
     */
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteAllResponses() {
        try {
            // Attempt to delete all survey responses
            surveyService.deleteAll();
        } catch (Exception e) {
            // Log errors but do nothing because it's not critical if deletion fails
            logger.error("Error deleting all survey responses:", e);
        }
        // Return a success response indicating that all survey responses were deleted
        return Response.status(HttpStatus.OK.value())
                .entity(new ResponseMetadata<>(true, "All Survey Responses were deleted"))
                .build();
    }
}
