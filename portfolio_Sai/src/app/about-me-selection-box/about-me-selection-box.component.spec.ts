import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSelectionBoxComponent } from './about-me-selection-box.component';

describe('AboutMeSelectionBoxComponent', () => {
  let component: AboutMeSelectionBoxComponent;
  let fixture: ComponentFixture<AboutMeSelectionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeSelectionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
