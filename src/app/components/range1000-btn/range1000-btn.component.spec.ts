import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Range1000BtnComponent } from './range1000-btn.component';

describe('Range1000BtnComponent', () => {
  let component: Range1000BtnComponent;
  let fixture: ComponentFixture<Range1000BtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Range1000BtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Range1000BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
