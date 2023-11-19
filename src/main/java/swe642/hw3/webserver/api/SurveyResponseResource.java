/*
 * Contributors:
 * - Josh Marsden
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

@Path("/survey")
public class SurveyResponseResource {

    Logger logger = LoggerFactory.getLogger(SurveyResponseResource.class);

    @Autowired
    private SurveyResponseService surveyService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createResponse(@RequestBody SurveyResponse surveyResponse) {
        try {
            SurveyResponse response = surveyService.createResponse(surveyResponse);
            return Response.status(HttpStatus.OK.value()).entity(new ResponseMetadata<>(true, response)).build();
        } catch (BadRequestException e) {
            return Response.status(HttpStatus.BAD_REQUEST.value()).entity(new ResponseMetadata<>(false, e.getMessage()))
                    .build();
        } catch (Exception e) {
            System.out.println(e);
            return Response.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .entity(new ResponseMetadata<>(false, "Unexpected database error"))
                    .build();
        }
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllResponses() {
        try {
            return Response.status(HttpStatus.OK.value())
                    .entity(new ResponseMetadata<>(true, surveyService.getAllResponses())).build();
        } catch (Exception e) {
            System.out.println(e);
            return Response.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .entity(new ResponseMetadata<>(false, "Unexpected database error"))
                    .build();
        }
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getResponseById(@PathParam("id") Long id) {
        try {
            Optional<SurveyResponse> response = surveyService.getResponse(id);
            if (response.isPresent()) {
                return Response.status(HttpStatus.OK.value()).entity(new ResponseMetadata<>(true, response.get()))
                        .build();
            } else {
                return Response.status(HttpStatus.NOT_FOUND.value())
                        .entity(new ResponseMetadata<>(false, "Could not find a Survey Respone for that id"))
                        .build();
            }
        } catch (Exception e) {
            System.out.println(e);
            return Response.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .entity(new ResponseMetadata<>(false, "Unexpected database error"))
                    .build();
        }
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteResponse(@PathParam("id") Long id) {
        try {
            surveyService.deleteResponse(id);
        } catch (Exception e) {
            // Do nothing because it's not important if anything fails at this point
        }
        return Response.status(HttpStatus.OK.value())
                .entity(new ResponseMetadata<>(true, "Deleted the Survey Response"))
                .build();
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteAllResponses() {
        try {
            surveyService.deleteAll();
        } catch (Exception e) {
            // Do nothing because it's not important if anything fails at this point
        }
        return Response.status(HttpStatus.OK.value())
                .entity(new ResponseMetadata<>(true, "All Survey Responses were deleted"))
                .build();
    }
}
