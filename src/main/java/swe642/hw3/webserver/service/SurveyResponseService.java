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

@Service
public class SurveyResponseService {

	@Autowired
	private SurveyRepository surveyRepository;

	// To create a response
	public SurveyResponse createResponse(SurveyResponse response) {
		try {
			return surveyRepository.save(response);
		} catch (DataIntegrityViolationException e) {
			throw new BadRequestException(e.getCause().getCause().getMessage());
		}
	}

	// To read all the responses from the database
	public List<SurveyResponse> getAllResponses() {
		return surveyRepository.findAll();
	}

	// To read the response according to the id
	public Optional<SurveyResponse> getResponse(Long id) {
		return surveyRepository.findById(id);
	}

	// To delete a response by id
	public void deleteResponse(Long id) {
		surveyRepository.deleteById(id);
	}

	// To delete all the responses
	public void deleteAll() {
		surveyRepository.deleteAll();
	}

}
