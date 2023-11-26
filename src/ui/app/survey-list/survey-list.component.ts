import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyResponsesService } from '../service/survey-responses.service';
import { SurveyResponse } from '../service/survey-responses.service';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'] // Corrected from styleUrl to styleUrls
})
export class SurveyListComponent implements OnInit {
  surveyList!: SurveyResponse[];

  constructor(private surveyService: SurveyResponsesService) { }

  ngOnInit(): void {
    this.surveyService.getAllResponses().subscribe(responseData => {
      // Assuming your API returns the data in a `data` field
      this.surveyList = responseData.data;
    });
  }
}
