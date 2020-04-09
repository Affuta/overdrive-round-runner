import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTakenMovesComponent } from './player-taken-moves.component';

describe('PlayerTakenMovesComponent', () => {
  let component: PlayerTakenMovesComponent;
  let fixture: ComponentFixture<PlayerTakenMovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerTakenMovesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTakenMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
