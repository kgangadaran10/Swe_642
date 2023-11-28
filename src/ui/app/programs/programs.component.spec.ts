/**
 * Contributors:
 * - Josh Marsden
 * - Gangadaran Kameswaran
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsComponent } from './programs.component';
// Component decorator defining metadata for the component
describe('ProgramsComponent', () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;

  beforeEach(async () => {
    // ConfigureTestingModule is used to configure the testing module
    await TestBed.configureTestingModule({
      imports: [ProgramsComponent]  // <-- Importing the ProgramsComponent
    })
    .compileComponents();  // Compiles the components, directives, and pipes in the module
    
    // Creating an instance of the component and its fixture
    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    
    // Detecting changes in the component's state
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assertion to check if the component is created successfully
    expect(component).toBeTruthy();
  });
});
