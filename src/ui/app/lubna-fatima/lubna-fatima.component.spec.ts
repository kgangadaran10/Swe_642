import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubnaFatimaComponent } from './lubna-fatima.component';

describe('LubnaFatimaComponent', () => {
  let component: LubnaFatimaComponent;
  let fixture: ComponentFixture<LubnaFatimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LubnaFatimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LubnaFatimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
