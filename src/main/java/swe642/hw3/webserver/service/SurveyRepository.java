/*
 * Contributors:
 * - Josh Marsden
 * - Lubna Fatima
 * - Gangadaran kameswaran
 */

package swe642.hw3.webserver.service;

import org.springframework.data.jpa.repository.JpaRepository;
import swe642.hw3.webserver.SurveyResponse;

/**
 * SurveyRepository is an interface that extends JpaRepository for SurveyResponse entities.
 * It provides basic CRUD operations on SurveyResponse entities.
 */
public interface SurveyRepository extends JpaRepository<SurveyResponse, Long> {
    // No additional methods are needed as JpaRepository provides basic CRUD operations.
}
