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


export class SurveyFormComponent implements OnInit {

  currSur: SurveyResponse;
  likesAbt: Array<any> = [];
  recommend: Array<any> = [];
  isSubmitted: boolean = false;
  showSuccess: boolean = false; 
  surveyForm!: FormGroup; // Declare the surveyForm property here

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private surveyService: SurveyResponsesService
  ) {
    this.currSur = this.initializeSurveyResponse();
    this.surveyForm = this.initializeForm();
  }

  ResponseData!: Observable<SurveyResponse[]>;

  ngOnInit() {
    var $:any;
   Object.keys(LikesAbtCampus).filter((v) => isNaN(Number(v))).forEach(key => {
     this.likesAbt.push({ name: key, value: key.toLowerCase() })
   });

   Object.keys(Recommend).filter((v)=>isNaN(Number(v))).forEach(key => {
     this.recommend.push({ name: key, value: key.toLowerCase() })
   });
  }

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
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      telNum: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      likesArray: this.fb.array([]),
      hearAbtCampus: [''],
      recommend: [''],
      comments: ['']
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
    this.router.navigateByUrl('/home');
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

    this.surveyService.addResponse(this.currSur).subscribe(res => {
      console.log({res});
      this.showSuccess = true;
      this.refreshForm();
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    });
  } else {
    console.log("Form is not valid");
  }
}


  cancelSurvey() {
    this.refreshForm();
  }
}
 

  /*addDummyResponse() {
    const dummyResponse = {
      firstName: 'Bob',
      lastName: 'Ross',
      streetAddress: '123 Abc Rd',
      city: 'Paintington',
      state: 'VA',
      zip: '12345',
      phone: '123-456-7890',
      email: '',
      likes: [],
      reference: '',
      recommendationLikelihood: 1,
      surveyDate: new Date(),
    };

    this.surveyService.addResponse(dummyResponse).subscribe({
      next: (res) => {
        console.log('Response added', res);
      },
      error: (err) => {
        console.error('Error adding response', err);
      }
    });
  }*/

