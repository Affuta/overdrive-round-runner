import { GameState } from '../models/game-state.model';
import { PLAYER_COMMAND } from '../enums/player-command.enum';

export class Heuristics {
  static getBestMove(gameState: GameState) {
    const availableCommands = gameState.player.getAvailableCommands();
    if (!availableCommands || !availableCommands[0]) {
      return PLAYER_COMMAND.NO_COMMAND;
    }
    return availableCommands[Math.floor(Math.random() * availableCommands.length)];
  }
}
