import { MyPlayer, Player } from './player.model';
import { Lane, RaceTrack } from './race-track.model';
import { PLAYER_COMMAND } from '../enums/player-command.enum';

export class GameState {
  public currentRound!: number;
  public maxRounds!: number;
  public player!: MyPlayer;
  public opponent!: Player;
  public worldMap!: RaceTrack;

  constructor(stateFile: { currentRound?: number; maxRounds?: number; player: MyPlayer; opponent?: Player; worldMap?: RaceTrack }) {
    Object.assign(this, stateFile);
    if (stateFile.worldMap && this.worldMap) {
      this.worldMap = new RaceTrack(flatMap(stateFile.worldMap));
      this.player = new MyPlayer(stateFile.player);
      if (this.player) {
        this.worldMap.myPlayerLane = this.worldMap.lanes[this.player.position.y - 1];
      }
    }
  }

  getLaneForMove(move: PLAYER_COMMAND): Lane {
    switch (move) {
      case PLAYER_COMMAND.NO_COMMAND:
      case PLAYER_COMMAND.NOTHING_COMMAND:
      case PLAYER_COMMAND.ACCELERATE_COMMAND:
      case PLAYER_COMMAND.DECELERATE_COMMAND:
      case PLAYER_COMMAND.USE_BOOST_COMMAND:
      case PLAYER_COMMAND.USE_OIL_COMMAND:
        return this.worldMap.myPlayerLane;
      case PLAYER_COMMAND.TURN_LEFT_COMMAND:
        return this.worldMap.getLaneToLeft(this.player.position);
      case PLAYER_COMMAND.TURN_RIGHT_COMMAND:
        return this.worldMap.getLaneToRight(this.player.position);
    }
  }
}

function flatMap(array: any) {
  return array.reduce((acc: any, x: any) => acc.concat(x), []);
}
