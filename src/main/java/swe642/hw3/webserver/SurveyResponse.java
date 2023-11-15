/*
 * Contributors:
 * - Josh Marsden
 */

package swe642.hw3.webserver;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class SurveyResponse {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "first_name", length = 50, nullable = false, unique = false)
    private String firstName;

    @Column(name = "last_name", length = 50, nullable = false, unique = false)
    private String lastName;

    @Temporal(TemporalType.DATE)
    private Date surveyDate;

    @Enumerated(EnumType.STRING)
    private Recommendation recommendation;

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

}
