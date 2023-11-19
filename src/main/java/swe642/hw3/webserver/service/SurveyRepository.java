/*
 * Contributors:
 * - Josh Marsden
 * - Lubna Fatima
 */

package swe642.hw3.webserver.service;

import org.springframework.data.jpa.repository.JpaRepository;
import swe642.hw3.webserver.SurveyResponse;

public interface SurveyRepository extends JpaRepository<SurveyResponse, Long> {
}
