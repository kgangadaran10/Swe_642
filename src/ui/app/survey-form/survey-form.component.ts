import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ReactiveFormsModule,FormBuilder, FormGroup,Validators,FormArray,FormControl,AbstractControl } from '@angular/forms'; 
import { SurveyResponsesService } from '../service/survey-responses.service';
import {  SurveyResponse } from '../service/survey-responses.service';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {
  surveyForm!: FormGroup; // Declare the surveyForm property here
  showSuccess: boolean = false; 
submit()
{
  console.log("Login success");
}
constructor(private fb: FormBuilder, private surveyService: SurveyResponsesService) { }

ResponseData!: Observable<SurveyResponse[]>;


  //constructor(private surveyService: SurveyResponsesService) { }
  validateError(controlName: string): boolean {
    const control = this.surveyForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
  likesAbt: { name: string; value: string }[] = [
    { name: 'Students', value: 'students' },
    { name: 'Location', value: 'location' },
    // ... other options ...
  ];
  hearAbt: { name: string; value: string }[] = [
    { name: 'Students', value: 'students' },
    { name: 'Location', value: 'location' },
    // ... other options ...
  ];
  recommend: { name: string; value: string }[]=[
    { name: 'Very Likely', value: 'veryLikely' },
    { name: 'Likely', value: 'likely' },
    { name: 'Unlikely', value: 'unlikely' }
    // Add other options as needed
  ];
  onCheckBoxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const likesArray = this.surveyForm.get('likesArray') as FormArray;
  
    if (checkbox.checked) {
      likesArray.push(this.fb.control(checkbox.value));
    } else {
      let i = 0;
      likesArray.controls.forEach((ctrl: AbstractControl) => {
        if (ctrl.value == checkbox.value) {
          likesArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  

  // ... other methods ...



  ngOnInit() {
    this.initializeForm();
    this.loadSurveyResponses();
    //this.addDummyResponse(); // This should probably be removed in production
  }
  initializeForm() {
    this.surveyForm = this.fb.group({
      // ... other form controls ...
      hearAbtCampus: ['', Validators.required], // Include hearAbtCampus here
      // ... more form controls ...
    });
  }
  loadSurveyResponses() {
    this.ResponseData = this.surveyService.getAllResponses();
  }
  cancelSurvey() {
    this.surveyForm.reset(); // Reset the form to its initial state
  }
  onChangeRecommend(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.surveyForm.get('recommend')?.setValue(selectedValue);
  }

  addDummyResponse() {
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
  }
}
