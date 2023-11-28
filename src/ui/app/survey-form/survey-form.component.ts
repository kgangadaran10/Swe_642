/**
 * Contributors:
 * - Josh Marsden
 * - Lubna Fatima
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ReactiveFormsModule,FormBuilder, FormGroup,Validators,FormArray,FormControl } from '@angular/forms'; 
import { SurveyResponsesService } from '../service/survey-responses.service';
import { SurveyResponse } from '../service/survey-responses.service';
import { Router } from '@angular/router';
import { LikesAbtCampus,Recommend } from '../service/survey-responses.service';

// Component decorator defining metadata for the component
@Component({
  selector: 'survey',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})

// Class declaration for the survey form component
export class SurveyFormComponent implements OnInit {
  // Declarations of properties used in this component
  currSur: SurveyResponse; // Stores the current survey response object
  likesAbt: Array<any> = []; // Array to store options for what the user likes about the campus
  recommend: Array<any> = []; // Array for recommendation options
  isSubmitted: boolean = false; // Flag to track if the form has been submitted
  surveyForm!: FormGroup; // FormGroup to handle the survey form
  showSuccess: boolean = false; // Flag to show success message

  // Constructor with dependency injections
  constructor(
    private router: Router, // Router for navigation
    private fb: FormBuilder, // FormBuilder to create form groups and controls
    private surveyService: SurveyResponsesService // Service for survey responses
  ) {
    // Initializing the survey response object and form on component creation
    this.currSur = this.initializeSurveyResponse();
    this.surveyForm = this.initializeForm();
  }

ResponseData!: Observable<SurveyResponse[]>;// Observable to hold survey response data
// ngOnInit lifecycle hook
  ngOnInit() {
    var $:any;// Unused variable, possibly for jQuery or similar library
      // Populating the likesAbt array with values from the LikesAbtCampus enum
 
   Object.keys(LikesAbtCampus).filter((v) => isNaN(Number(v))).forEach(key => {
     this.likesAbt.push({ name: key, value: key.toLowerCase() })
   });

    // Populating the recommend array with values from the Recommend enum
   Object.keys(Recommend).filter((v)=>isNaN(Number(v))).forEach(key => {
     this.recommend.push({ name: key, value: key.toLowerCase() })
   });
  }
  // Initializes a new SurveyResponse object with default values
  initializeSurveyResponse(): SurveyResponse {
    return {
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
      likes: [],
      reference: '',
      recommendationLikelihood: 0,
      surveyDate: new Date(),
      additionalComments: ''
    };
  }

  initializeForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required]], // Input field for first name with required validation
      lastName: ['', [Validators.required]], // Input field for last name with required validation
      streetAddress: ['', [Validators.required]], // Input field for street address with required validation
      city: ['', [Validators.required]], // Input field for city with required validation
      state: ['', [Validators.required]], // Input field for state with required validation
      zip: ['', [Validators.required, Validators.pattern('[0-9]{5}')]], // Input field for zip with required validation and pattern
      telNum: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], // Input field for telephone number with validation
      email: ['', [Validators.required, Validators.email]], // Input field for email with required validation and email format
      date: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]], // Input field for date with required validation and pattern
      likesArray: this.fb.array([]), // Form array for likes with dynamic form controls
      hearAbtCampus: [''], // Select field for how they heard about the campus
      recommend: [''], // Select field for recommendation
      comments: [''] // Textarea for additional comments
    });
  }

  populateEnums() {
    Object.keys(LikesAbtCampus).filter(v => isNaN(Number(v))).forEach(key => {
      this.likesAbt.push({ name: key, value: key.toLowerCase() });
    });

    Object.keys(Recommend).filter(v => isNaN(Number(v))).forEach(key => {
      this.recommend.push({ name: key, value: key.toLowerCase() });
    });
  }

  loadSurveyResponses() {
    this.ResponseData = this.surveyService.getAllResponses();
  }

  onChangeRecommend(e: any) {
    this.surveyForm.get('recommend')?.setValue(e.target.value);
  }

  onCheckBoxChange(e: any) {
    const likeArray: FormArray = this.surveyForm.get('likesArray') as FormArray;
    if (e.target.checked) {
      likeArray.push(new FormControl(e.target.value.toUpperCase()));
    } else {
      let i: number = 0;
      likeArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          likeArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  validateError(name: string) {
    return this.surveyForm.get(name)?.invalid && this.isSubmitted
  }

  refreshForm(){
    this.isSubmitted = false;
    for(let name in this.surveyForm.controls){
     this.surveyForm.controls[name].setErrors(null);
    }
    this.surveyForm.reset();
    this.router.navigateByUrl('/submit');
  }
   
  submit() {
  this.isSubmitted = true;
  if (this.surveyForm.valid) {
    console.log("Form submission in progress");

      // Construct the SurveyResponse object from the form values
      this.currSur = {
        ...this.currSur,
        firstName: this.surveyForm.get("firstName")?.value,
        lastName: this.surveyForm.get("lastName")?.value,
        streetAddress: this.surveyForm.get("streetAddress")?.value,
        city: this.surveyForm.get("city")?.value,
        state: this.surveyForm.get("state")?.value,
        zip: this.surveyForm.get("zip")?.value,
        phone: this.surveyForm.get("telNum")?.value,
        email: this.surveyForm.get("email")?.value,
        likes: this.surveyForm.get('likesArray')?.value || [],
        reference: this.surveyForm.get('hearAbtCampus')?.value,
        recommendationLikelihood: parseInt(this.surveyForm.get('recommend')?.value),
        surveyDate: new Date(this.surveyForm.get("date")?.value),
        additionalComments: this.surveyForm.get("comments")?.value
      };
// Sending the survey response to the server
      this.surveyService.addResponse(this.currSur).subscribe(res => {
        console.log({res});
        this.showSuccess = true;
        this.refreshForm();// Reset the form after submission
        console.log("Form submitted");// Show success message
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      });
    } else {
      console.log("Form is not valid");
    }
}
// Cancels the survey and resets the form

  cancelSurvey() {
    this.refreshForm();
  }
}
 

  