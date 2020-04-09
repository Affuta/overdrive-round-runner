import { Component, Input } from '@angular/core';
import { GameState } from '../../models/game-state.model';
import { TRACK_LENGTH } from '../../../game-config';
import { PLAYER_COMMAND } from '../../enums/player-command.enum';
import { POWERUP } from '../../enums/powerup.enum';
import { Heuristics } from '../../utils/heuristics';

@Component({
  selector: 'app-round-display',
  templateUrl: './round-display.component.html',
  styleUrls: ['./round-display.component.scss'],
})
export class RoundDisplayComponent {
  @Input()
  showTilesInRange = true;

  @Input()
  highlightTiles = true;

  @Input()
  playerName = 'Player';

  @Input()
  showDisplayOptions = true;

  @Input()
  showDetails = true;

  @Input()
  showTotals = false;

  numberOfBoosts = 0;
  numberOfOilSpills = 0;
  private _gameState;

  get gameState(): GameState {
    return this._gameState;
  }
  @Input()
  set gameState(gameState: GameState) {
    if (this._gameState) {
      this.previousGameState = this._gameState;
    }
    this._gameState = gameState;
    this.onGameStateChanged();
  }
  previousGameState: GameState;
  trackLength = TRACK_LENGTH;
  math = Math;

  bestMove = PLAYER_COMMAND.NO_COMMAND;

  constructor() {}

  onGameStateChanged() {
    this.bestMove = Heuristics.getBestMove(this.gameState);
    const powerups = this.gameState.player.powerups;
    if (powerups && powerups[0]) {
      this.numberOfBoosts = powerups.filter((p) => p === POWERUP.BOOST_POWERUP_ITEM).length;
      this.numberOfOilSpills = powerups.filter((p) => p === POWERUP.OIL_POWERUP_ITEM).length;
    } else {
      this.numberOfBoosts = 0;
      this.numberOfOilSpills = 0;
    }
  }

  onHighlightTilesChanged(event: any) {
    this.highlightTiles = event.target.checked;
  }

  onShowTilesInRangeChanged(event: any) {
    this.showTilesInRange = event.target.checked;
  }
}
