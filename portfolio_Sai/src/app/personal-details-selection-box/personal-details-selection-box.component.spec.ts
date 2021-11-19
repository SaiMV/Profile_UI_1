import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsSelectionBoxComponent } from './personal-details-selection-box.component';

describe('PersonalDetailsSelectionBoxComponent', () => {
  let component: PersonalDetailsSelectionBoxComponent;
  let fixture: ComponentFixture<PersonalDetailsSelectionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsSelectionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
