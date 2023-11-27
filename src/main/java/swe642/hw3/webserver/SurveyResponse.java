/**
 * Contributors:
 * - Josh Marsden
 * - Gangadaran Kameswaran
 */

package swe642.hw3.webserver;

import java.time.Instant;
import java.time.ZonedDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

/**
 * Entity class representing a survey response.
 */
@Entity
public class SurveyResponse {

    @Id
    @GeneratedValue
    private Long id;

    // Personal Information
    @Column(name = "first_name", length = 50, nullable = false, unique = false)
    private String firstName;

    @Column(name = "last_name", length = 50, nullable = false, unique = false)
    private String lastName;

    @Column(name = "street_address", length = 100, nullable = false, unique = false)
    private String streetAddress;

    @Column(name = "city", length = 50, nullable = false, unique = false)
    private String city;

    @Column(name = "state", length = 50, nullable = false, unique = false)
    private String state;

    @Column(name = "zip", length = 10, nullable = false, unique = false)
    private String zip;

    @Column(name = "phone", length = 20, nullable = false, unique = false)
    private String phone;

    @Column(name = "email", length = 100, nullable = false, unique = false)
    private String email;

    // Survey Details
    @Column(name = "likes", length = 255, nullable = false, unique = false)
    private String likes;

    @Column(name = "source_of_interest", length = 100, nullable = false, unique = false)
    private String reference;

    @Column(name = "likelihood_of_recommendation", nullable = false)
    private int recommendationLikelihood;

    @Column(name = "additional_comments", length = 500, nullable = true)
    private String additionalComments;

    @Temporal(TemporalType.TIMESTAMP)
    private Instant surveyDate;

    // Getters and setters...

    /**
     * Getter for the unique identifier of the survey response.
     * @return The unique identifier.
     */
    public Long getId() {
        return id;
    }

    /**
     * Getter for the first name.
     * @return The first name.
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Setter for the first name.
     * @param firstName The first name to set.
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * Getter for the last name.
     * @return The last name.
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Setter for the last name.
     * @param lastName The last name to set.
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * Getter for the street address.
     * @return The street address.
     */
    public String getStreetAddress() {
        return streetAddress;
    }

    /**
     * Setter for the street address.
     * @param streetAddress The street address to set.
     */
    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    /**
     * Getter for the city.
     * @return The city.
     */
    public String getCity() {
        return city;
    }

    /**
     * Setter for the city.
     * @param city The city to set.
     */
    public void setCity(String city) {
        this.city = city;
    }

    /**
     * Getter for the state.
     * @return The state.
     */
    public String getState() {
        return state;
    }

    /**
     * Setter for the state.
     * @param state The state to set.
     */
    public void setState(String state) {
        this.state = state;
    }

    /**
     * Getter for the ZIP code.
     * @return The ZIP code.
     */
    public String getZip() {
        return zip;
    }

    /**
     * Setter for the ZIP code.
     * @param zip The ZIP code to set.
     */
    public void setZip(String zip) {
        this.zip = zip;
    }

    /**
     * Getter for the phone number.
     * @return The phone number.
     */
    public String getPhone() {
        return phone;
    }

    /**
     * Setter for the phone number.
     * @param phone The phone number to set.
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * Getter for the email address.
     * @return The email address.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Setter for the email address.
     * @param email The email address to set.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Getter for the array of likes.
     * @return The array of likes.
     */
    public String[] getLikes() {
        return likes.split("[,]");
    }

    /**
     * Setter for the array of likes.
     * @param likes The array of likes to set.
     */
    public void setLikes(String[] likes) {
        this.likes = String.join(",", likes);
    }

    /**
     * Getter for the source of interest.
     * @return The source of interest.
     */
    public String getReference() {
        return reference;
    }

    /**
     * Setter for the source of interest.
     * @param reference The source of interest to set.
     */
    public void setReference(String reference) {
        this.reference = reference;
    }

    /**
     * Getter for the likelihood of recommendation.
     * @return The likelihood of recommendation.
     */
    public int getRecommendationLikelihood() {
        return recommendationLikelihood;
    }

    /**
     * Setter for the likelihood of recommendation.
     * @param recommendationLikelihood The likelihood of recommendation to set.
     */
    public void setRecommendationLikelihood(int recommendationLikelihood) {
        this.recommendationLikelihood = recommendationLikelihood;
    }

    /**
     * Getter for additional comments.
     * @return Additional comments.
     */
    public String getAdditionalComments() {
        return additionalComments;
    }

    /**
     * Setter for additional comments.
     * @param additionalComments Additional comments to set.
     */
    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }

    /**
     * Getter for the survey date.
     * @return The survey date.
     */
    public Instant getSurveyDate() {
        return surveyDate;
    }

    /**
     * Setter for the survey date.
     * @param surveyDate The survey date to set in string format.
     */
    public void setSurveyDate(String surveyDate) {
        // Parse the survey date from String to Instant
        this.surveyDate = Instant.from(ZonedDateTime.parse(surveyDate));
    }
}
