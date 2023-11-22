/**
 * Contributors:
 * - Josh Marsden
 * - Lubna Fatima
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyResponsesService } from '../service/survey-responses.service';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.scss'
})
export class SurveyFormComponent {
  responseData = this.survey.getAllResponses();

  constructor (private survey: SurveyResponsesService) { }

  ngOnInit() {
    this.survey.addResponse({
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
    }).subscribe((res) => {
      console.log({res});
    });

    this.responseData.subscribe((res) => {
      const surveys = res.data;
      console.log({surveys});
    });
  }
}
