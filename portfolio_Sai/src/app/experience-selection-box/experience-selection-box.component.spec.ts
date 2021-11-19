import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSelectionBoxComponent } from './experience-selection-box.component';

describe('ExperienceSelectionBoxComponent', () => {
  let component: ExperienceSelectionBoxComponent;
  let fixture: ComponentFixture<ExperienceSelectionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSelectionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
