/**
 * Contributors:
 * - Josh Marsden
 * - Gangadaran Kameswaran
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
        // Configuring the TestBed with necessary modules and dependencies
        provideHttpClient(withFetch()),
        { provide: 'baseUrl', useValue: 'http://localhost:8080/survey' },
      ],
    });
    
    // Creating an instance of the SurveyResponsesService
    service = TestBed.inject(SurveyResponsesService);
  });

  it('should be created', () => {
    // Verifying that the service instance is created successfully
    expect(service).toBeTruthy();
  });
});
