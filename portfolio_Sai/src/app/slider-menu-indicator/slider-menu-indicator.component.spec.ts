import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMenuIndicatorComponent } from './slider-menu-indicator.component';

describe('SliderMenuIndicatorComponent', () => {
  let component: SliderMenuIndicatorComponent;
  let fixture: ComponentFixture<SliderMenuIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMenuIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMenuIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
