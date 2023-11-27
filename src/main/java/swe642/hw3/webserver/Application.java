/*
 * Contributors:
 * - Josh Marsden
 * - Gangadaran Kameswaran
 */

package swe642.hw3.webserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The main application class for starting the web server.
 */
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        // Start the Spring Boot application
        SpringApplication.run(Application.class, args);
    }

}
