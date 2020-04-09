import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStateDisplayComponent } from './player-state-display.component';

describe('PlayerStateDisplayComponent', () => {
  let component: PlayerStateDisplayComponent;
  let fixture: ComponentFixture<PlayerStateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerStateDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
