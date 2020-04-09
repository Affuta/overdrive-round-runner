import { GameState } from './game-state.model';
import { PLAYER_COMMAND } from '../enums/player-command.enum';

export class Round {
  constructor(
    public playerOneState: GameState,
    public playerTwoState: GameState,
    public playerOneCommand: PLAYER_COMMAND,
    public playerTwoCommand: PLAYER_COMMAND,
    public globalState?: GameState
  ) {}
}
