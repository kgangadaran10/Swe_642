/*
 * Contributors:
 * - Josh Marsden
 * - Gangadaran Kameswaran
 */

package swe642.hw3.webserver.api;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

/**
 * JerseyConfig class is responsible for configuring Jersey resources for the web server.
 */
@Component
public class JerseyConfig extends ResourceConfig {

    /**
     * Constructor for JerseyConfig class.
     * Registers the SurveyResponseResource class as a Jersey resource.
     */
    public JerseyConfig() {
        register(SurveyResponseResource.class);
    }
}
