import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalDetailsSelectionBoxComponent } from './educational-details-selection-box.component';

describe('EducationalDetailsSelectionBoxComponent', () => {
  let component: EducationalDetailsSelectionBoxComponent;
  let fixture: ComponentFixture<EducationalDetailsSelectionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalDetailsSelectionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalDetailsSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
