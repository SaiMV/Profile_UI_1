import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstlookSelectionBoxComponent } from './firstlook-selection-box.component';

describe('FirstlookSelectionBoxComponent', () => {
  let component: FirstlookSelectionBoxComponent;
  let fixture: ComponentFixture<FirstlookSelectionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstlookSelectionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstlookSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
