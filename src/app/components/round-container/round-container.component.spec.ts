import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundContainerComponent } from './round-container.component';

describe('RoundContainerComponent', () => {
  let component: RoundContainerComponent;
  let fixture: ComponentFixture<RoundContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoundContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
