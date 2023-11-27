/**
 * Contributors:
 * - Lubna Fatima
 * - Gangadaran Kameswaran
 */

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

/**
 * Test suite for the AppComponent in the Angular application.
 */
describe('AppComponent', () => {

  /**
   * Asynchronous setup before each test.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  /**
   * Test case to check if the app component is created successfully.
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Test case to check if the app component has the correct title.
   */
  it(`should have the 'survey-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('survey-app');
  });

  /**
   * Test case to check if the title is rendered in the HTML.
   */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, survey-app');
  });
});
