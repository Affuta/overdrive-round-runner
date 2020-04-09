import { Component, ElementRef } from '@angular/core';
import { GameStateService } from '../../../services/game-state.service';
import { LiveListBase } from '../../bases/live-list.base';
import { PLAYER_COMMAND } from '../../../enums/player-command.enum';
import { GameState } from '../../../models/game-state.model';
import { Heuristics } from '../../../utils/heuristics';

@Component({
  selector: 'app-player-moves-display',
  templateUrl: './player-moves-display.component.html',
  styleUrls: ['./player-moves-display.component.scss'],
})
export class PlayerMovesDisplayComponent extends LiveListBase<PLAYER_COMMAND> {
  constructor(_stateService: GameStateService) {
    super(_stateService);
  }

  listElement: ElementRef<HTMLElement>;

  onStateChanged(gameState: GameState) {
    const item = Heuristics.getBestMove(gameState);
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
