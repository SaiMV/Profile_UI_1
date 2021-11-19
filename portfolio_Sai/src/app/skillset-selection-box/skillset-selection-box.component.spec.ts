import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetSelectionBoxComponent } from './skillset-selection-box.component';

describe('SkillsetSelectionBoxComponent', () => {
  let component: SkillsetSelectionBoxComponent;
  let fixture: ComponentFixture<SkillsetSelectionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsetSelectionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsetSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
