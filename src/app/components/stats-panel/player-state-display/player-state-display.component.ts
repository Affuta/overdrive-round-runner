import { Component } from '@angular/core';
import { LiveListBase } from '../../bases/live-list.base';
import { GameStateService } from '../../../services/game-state.service';
import { PLAYER_STATE } from '../../../enums/player-state.enum';
import { GameState } from '../../../models/game-state.model';

@Component({
  selector: 'app-player-state-display',
  templateUrl: './player-state-display.component.html',
  styleUrls: ['./player-state-display.component.scss'],
})
export class PlayerStateDisplayComponent extends LiveListBase<PLAYER_STATE> {
  constructor(_stateService: GameStateService) {
    super(_stateService);
  }

  onStateChanged(gameState: GameState) {
    const item = gameState.player.state;
    this.items.push(item);
    let count = this.itemCount.find((i) => i.name === item);
    if (!count) {
      count = { name: item, count: 1 };
      this.itemCount.push(count);
    } else {
      count.count++;
    }
  }
}
