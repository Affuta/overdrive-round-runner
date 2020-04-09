import { Component } from '@angular/core';
import { LiveListBase } from '../../bases/live-list.base';
import { GameStateService } from '../../../services/game-state.service';
import { Round } from '../../../models/round.model';
import { PLAYER_COMMAND } from '../../../enums/player-command.enum';
import { GameState } from '../../../models/game-state.model';

@Component({
  selector: 'app-player-taken-moves',
  templateUrl: './player-taken-moves.component.html',
  styleUrls: ['./player-taken-moves.component.scss'],
})
export class PlayerTakenMovesComponent extends LiveListBase<PLAYER_COMMAND> {
  constructor(_gameStateService: GameStateService) {
    super(_gameStateService);
  }

  onRoundChanged(round: Round) {
    let command = round.playerTwoCommand;
    if (this.player.id === round.playerOneState.player.id) {
      command = round.playerOneCommand;
    }
    this.items.push(command);

    let count = this.itemCount.find((i) => i.name === command);
    if (!count) {
      count = { name: command, count: 1 };
      this.itemCount.push(count);
    } else {
      count.count++;
    }
  }

  onStateChanged(gameState: GameState) {}
}
