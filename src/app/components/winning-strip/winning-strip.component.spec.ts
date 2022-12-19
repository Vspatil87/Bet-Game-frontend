import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningStripComponent } from './winning-strip.component';

describe('WinningStripComponent', () => {
  let component: WinningStripComponent;
  let fixture: ComponentFixture<WinningStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinningStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
