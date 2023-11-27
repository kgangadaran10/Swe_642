/**
 * Contributors:
 * - Lubna Fatima
 * - Gangadaran Kameswaran
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubnaFatimaComponent } from './lubna-fatima.component';

describe('LubnaFatimaComponent', () => {
  // Declare variables for the component and its fixture
  let component: LubnaFatimaComponent;
  let fixture: ComponentFixture<LubnaFatimaComponent>;

  // Execute setup tasks before each test
  beforeEach(async () => {
    // Configure TestBed with necessary modules
    await TestBed.configureTestingModule({
      imports: [LubnaFatimaComponent]  // <-- Add any necessary imports
    })
    .compileComponents();  // Compile the component

    // Create an instance of the component and its fixture
    fixture = TestBed.createComponent(LubnaFatimaComponent);
    component = fixture.componentInstance;

    // Detect changes in the component
    fixture.detectChanges();
  });

  // Test to ensure that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
