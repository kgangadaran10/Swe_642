/**
 * Contributors:
 * - Josh Marsden
 * - Lubna Fatima
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormComponent } from './survey-form.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

describe('SurveyFormComponent', () => {
  let component: SurveyFormComponent;
  let fixture: ComponentFixture<SurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, SurveyFormComponent],
      providers: [
        provideHttpClient(withFetch()),
        {provide: 'baseUrl', useValue: 'http://localhost:8080/survey'},
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
