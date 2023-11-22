/**
 * Contributors:
 * - Josh Marsden
 */

import { TestBed } from '@angular/core/testing';

import { SurveyResponsesService } from './survey-responses.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

describe('SurveyResponsesService', () => {
  let service: SurveyResponsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        provideHttpClient(withFetch()),
        {provide: 'baseUrl', useValue: 'http://localhost:8080/survey'},
      ],
    });
    service = TestBed.inject(SurveyResponsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
