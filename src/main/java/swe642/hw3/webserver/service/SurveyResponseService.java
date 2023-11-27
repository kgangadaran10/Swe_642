/*
 * Contributors:
 * - Josh Marsden
 * - Lubna Fatima
 */

package swe642.hw3.webserver.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import jakarta.ws.rs.BadRequestException;
import swe642.hw3.webserver.SurveyResponse;

/**
 * Service class for handling SurveyResponse entities.
 */
@Service
public class SurveyResponseService {

	// Autowired repository for handling SurveyResponse entities
	@Autowired
	private SurveyRepository surveyRepository;

	/**
	 * Create a new survey response.
	 *
	 * @param response The survey response data to be created.
	 * @return The created survey response.
	 * @throws BadRequestException if there is a data integrity violation (e.g., duplicate key).
	 */
	public SurveyResponse createResponse(SurveyResponse response) {
		try {
			// Attempt to save the survey response to the repository
			return surveyRepository.save(response);
		} catch (DataIntegrityViolationException e) {
			// Throw a BadRequestException with the cause message if there is a data integrity violation
			throw new BadRequestException(e.getCause().getCause().getMessage());
		}
	}

	/**
	 * Retrieve all survey responses from the database.
	 *
	 * @return A list of all survey responses.
	 */
	public List<SurveyResponse> getAllResponses() {
		// Retrieve all survey responses from the repository
		return surveyRepository.findAll();
	}

	/**
	 * Retrieve a survey response by ID.
	 *
	 * @param id The ID of the survey response to retrieve.
	 * @return An Optional containing the requested survey response, or an empty Optional if not found.
	 */
	public Optional<SurveyResponse> getResponse(Long id) {
		// Retrieve a survey response by ID from the repository
		return surveyRepository.findById(id);
	}

	/**
	 * Delete a survey response by ID.
	 *
	 * @param id The ID of the survey response to delete.
	 */
	public void deleteResponse(Long id) {
		// Delete a survey response by ID from the repository
		surveyRepository.deleteById(id);
	}

	/**
	 * Delete all survey responses.
	 */
	public void deleteAll() {
		// Delete all survey responses from the repository
		surveyRepository.deleteAll();
	}

}
