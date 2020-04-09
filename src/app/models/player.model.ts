import { Position } from './position.model';
import { PLAYER_STATE } from '../enums/player-state.enum';
import { POWERUP } from '../enums/powerup.enum';
import { PLAYER_COMMAND } from '../enums/player-command.enum';
import {
  BOOST_SPEED,
  INITIAL_SPEED,
  MAX_LANE,
  MAXIMUM_SPEED,
  MIN_LANE,
  MINIMUM_SPEED,
  SPEED_STATE_1,
  SPEED_STATE_2,
  SPEED_STATE_3,
} from '../../game-config';
const SPEEDS = [MINIMUM_SPEED, SPEED_STATE_1, INITIAL_SPEED, SPEED_STATE_2, SPEED_STATE_3, MAXIMUM_SPEED];
export class Player {
  public id: number;
  public position: Position;
  public speed = INITIAL_SPEED;
  get previousSpeed(): number {
    if (this.speed !== MINIMUM_SPEED) {
      return SPEEDS[SPEEDS.indexOf(this.speed) - 1];
    }
    return this.speed;
  }
  get nextSpeed(): number {
    if (this.speed !== MAXIMUM_SPEED && this.speed !== BOOST_SPEED) {
      return SPEEDS[SPEEDS.indexOf(this.speed) + 1];
    }
    return this.speed;
  }
  constructor(json: any) {
    this.id = json.id;
    this.position = json.position;
    this.speed = json.speed;
  }
}

export class MyPlayer extends Player {
  public state: PLAYER_STATE;
  public powerups: POWERUP[];
  public boosting: boolean;
  public boostCounter: number;
  constructor(json: any) {
    super(json);
    this.state = json.state;
    this.powerups = json.powerups;
    this.boosting = json.boosting;
    this.boostCounter = json.boostCounter;
  }

  public getAvailableCommands(): PLAYER_COMMAND[] {
    const options = [PLAYER_COMMAND.NOTHING_COMMAND, PLAYER_COMMAND.NO_COMMAND];

    if (this.speed > MINIMUM_SPEED) {
      options.push(PLAYER_COMMAND.DECELERATE_COMMAND);
    }
    if (this.speed < MAXIMUM_SPEED) {
      options.push(PLAYER_COMMAND.ACCELERATE_COMMAND);
    }
    if (this.powerups.includes(POWERUP.OIL_POWERUP_ITEM)) {
      options.push(PLAYER_COMMAND.USE_OIL_COMMAND);
    }

    if (this.powerups.includes(POWERUP.BOOST_POWERUP_ITEM) && this.speed !== BOOST_SPEED) {
      options.push(PLAYER_COMMAND.USE_BOOST_COMMAND);
    }

    if (this.position.y > MIN_LANE) {
      options.push(PLAYER_COMMAND.TURN_LEFT_COMMAND);
    }

    if (this.position.y < MAX_LANE) {
      options.push(PLAYER_COMMAND.TURN_RIGHT_COMMAND);
    }
    return options;
  }
}
