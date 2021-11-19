import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSelectionBoxComponent } from './project-selection-box.component';

describe('ProjectSelectionBoxComponent', () => {
  let component: ProjectSelectionBoxComponent;
  let fixture: ComponentFixture<ProjectSelectionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSelectionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
