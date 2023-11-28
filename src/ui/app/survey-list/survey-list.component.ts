import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyResponsesService } from '../service/survey-responses.service';
import { SurveyResponse } from '../service/survey-responses.service';
// Component decorator defining metadata for the component
@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-list.component.html',//html file
  styleUrls: ['./survey-list.component.css'] // css file
})
export class SurveyListComponent implements OnInit {
  surveyList!: SurveyResponse[];

  constructor(private surveyService: SurveyResponsesService) { }
// ngOnInit lifecycle hook
  ngOnInit(): void {
    this.surveyService.getAllResponses().subscribe(responseData => {
      // Assuming your API returns the data in a `data` field
      this.surveyList = responseData.data;
    });
  }
}
