import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetintouchwithSelectionboxComponent } from './getintouchwith-selectionbox.component';

describe('GetintouchwithSelectionboxComponent', () => {
  let component: GetintouchwithSelectionboxComponent;
  let fixture: ComponentFixture<GetintouchwithSelectionboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetintouchwithSelectionboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetintouchwithSelectionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
