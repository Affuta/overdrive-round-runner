export const NUMBER_OF_LANES = 4;
export const TRACK_LENGTH = 1500;
export const MIN_LANE = 1;
export const MAX_LANE = 4;
export const MAX_ROUNDS = 600;

export const EMPTY_PLAYER = 0;
export const DEFAULT_HEALTH = 0;
export const DEFAULT_SCORE = 0;

export const READY_PLAYER_STATE = 'READY';
export const NOTHING_PLAYER_STATE = 'NOTHING';
export const TURNING_LEFT_PLAYER_STATE = 'TURNING_LEFT';
export const TURNING_RIGHT_PLAYER_STATE = 'TURNING_RIGHT';
export const ACCELERATING_PLAYER_STATE = 'ACCELERATING';
export const DECELERATING_PLAYER_STATE = 'DECELERATING';
export const PICKED_UP_POWERUP_PLAYER_STATE = 'PICKED_UP_POWERUP';
export const USED_POWERUP_BOOST_PLAYER_STATE = 'USED_BOOST';
export const USED_POWERUP_OIL_PLAYER_STATE = 'USED_OIL';
export const HIT_MUD_PLAYER_STATE = 'HIT_MUD';
export const HIT_OIL_PLAYER_STAE = 'HIT_OIL';
export const FINISHED_PLAYER_STATE = 'FINISHED';

export const MINIMUM_SPEED = 0;
export const SPEED_STATE_1 = 3;
export const INITIAL_SPEED = 5;
export const SPEED_STATE_2 = 6;
export const SPEED_STATE_3 = 8;
export const MAXIMUM_SPEED = 9;
export const BOOST_SPEED = 15;

export const PLAYER_ONE_START_LANE = 1;
export const PLAYER_ONE_START_BLOCK = 1;
export const PLAYER_TWO_START_LANE = 3;
export const PLAYER_TWO_START_BLOCK = 1;

export const EMPTY_MAP_OBJECT = 0;

export const STARTING_BLOCK_FOR_GENERATED_MAP_OBJECTS = 6;

export const MUD_GENERATION_PERCENTAGE = 10;
export const BOOST_GENERATION_PERCENTAGE = 1;
export const OIL_ITEM_GENERATION_PERCENTAGE = 1;

export const MUD_MAP_OBJECT = 1;
export const OIL_SPILL_MAP_OBJECT = 2;
export const OIL_ITEM_MAP_OBJECT = 3;
export const FINISH_LINE_MAP_OBJECT = 4;
export const BOOST_MAP_OBJECT = 5;

export const OIL_POWERUP_ITEM = 'OIL';
export const BOOST_POWERUP_ITEM = 'BOOST';
export const BOOST_DURATION = 5;

export const NO_COMMAND = 'NO COMMAND';
export const NOTHING_COMMAND = 'NOTHING';
export const TURN_LEFT_COMMAND = 'TURN_LEFT';
export const TURN_RIGHT_COMMAND = 'TURN_RIGHT';
export const CHANGE_LANE_PENALTY = 1;

export const ACCELERATE_COMMAND = 'ACCELERATE';
export const DECELERATE_COMMAND = 'DECELERATE';

export const USE_BOOST_COMMAND = 'USE_BOOST';
export const USE_OIL_COMMAND = 'USE_OIL';

export const BACKWARD_VISIBILITY = 5;
export const FORWARD_VISIBILITY = 20;

export const HIT_MUD_SCORE_PENALTY = -3;
export const HIT_OIL_SCORE_PENALTY = -4;
export const PICKUP_POWERUP_BONUS = 4;
export const USE_POWERUP_BONUS = 4;

export const csvSeparator = ',';
