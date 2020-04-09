import { Component, Input } from '@angular/core';
import { GameState } from '../../models/game-state.model';

@Component({
  selector: 'app-race-track',
  templateUrl: './race-track.component.html',
  styleUrls: ['./race-track.component.scss'],
})
export class RaceTrackComponent {
  @Input()
  highlightTiles = false;

  @Input()
  showTilesInPlayerRange = false;

  @Input()
  gameState: GameState;

  constructor() {}
}
