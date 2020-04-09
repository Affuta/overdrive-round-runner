import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMovesDisplayComponent } from './player-moves-display.component';

describe('PlayerMovesDisplayComponent', () => {
  let component: PlayerMovesDisplayComponent;
  let fixture: ComponentFixture<PlayerMovesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerMovesDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMovesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
