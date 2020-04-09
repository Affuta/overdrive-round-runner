import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundDisplayComponent } from './round-display.component';

describe('RoundDisplayComponent', () => {
  let component: RoundDisplayComponent;
  let fixture: ComponentFixture<RoundDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoundDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
