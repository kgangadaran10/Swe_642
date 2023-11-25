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

    @Column(name = "likes", length = 255, nullable = false, unique = false)
    private String likes;

    @Column(name = "source_of_interest", length = 100, nullable = false, unique = false)
    private String sourceOfInterest;

    @Column(name = "likelihood_of_recommendation", nullable = false)
    private int likelihoodOfRecommendation;

    @Temporal(TemporalType.DATE)
    private Date surveyDate;

    // Getters and setters...

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

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLikes() {
        return likes;
    }

    public void setLikes(String likes) {
        this.likes = likes;
    }

    public String getSourceOfInterest() {
        return sourceOfInterest;
    }

    public void setSourceOfInterest(String sourceOfInterest) {
        this.sourceOfInterest = sourceOfInterest;
    }

    public int getLikelihoodOfRecommendation() {
        return likelihoodOfRecommendation;
    }

    public void setLikelihoodOfRecommendation(int likelihoodOfRecommendation) {
        this.likelihoodOfRecommendation = likelihoodOfRecommendation;
    }

    public Date getSurveyDate() {
        return surveyDate;
    }

    public void setSurveyDate(Date surveyDate) {
        this.surveyDate = surveyDate;
    }

    public String getAdditionalComment() {
        return additionalComment;
    }

    public void setAdditionalComment(String additionalComment) {
        this.additionalComment = additionalComment;
    }
    
}
