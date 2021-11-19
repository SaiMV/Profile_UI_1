import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetProgressSelectorComponent } from './skill-set-progress-selector.component';

describe('SkillSetProgressSelectorComponent', () => {
  let component: SkillSetProgressSelectorComponent;
  let fixture: ComponentFixture<SkillSetProgressSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSetProgressSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSetProgressSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
