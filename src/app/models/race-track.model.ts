import { Position } from './position.model';
import { MAP_OBJECT } from '../enums/map-object.enum';
import { TILE_TYPE } from '../enums/tile-type.enum';
import { MAX_LANE, MIN_LANE } from '../../game-config';

const NUMBER_OF_LANES = 4;
export class RaceTrack {
  public readonly startOfTrack!: number;
  public readonly endOfTrack!: number;
  public lanes: Lane[] = [];
  public myPlayerLane!: Lane;

  constructor(public tiles: Tile[]) {
    if (tiles && tiles[0]) {
      this.lanes = [];
      for (let i = 0; i < NUMBER_OF_LANES; i++) {
        const laneNumber = i + 1;
        const lane = new Lane(
          laneNumber,
          tiles.filter((tile) => tile.position.y === laneNumber).map((t) => new Tile(t))
        );
        this.lanes.push(lane);
      }

      if (this.lanes && this.lanes[0]) {
        const lane = this.lanes[0];
        this.startOfTrack = lane.getFirstTile().position.x;
        this.endOfTrack = lane.getLastTile().position.x;
      }
    }
  }

  getLaneToLeft(position: Position) {
    if (position.y === MIN_LANE) {
      return null;
    }
    return this.lanes[position.y - 2];
  }

  getLaneToRight(position: Position): Lane | null {
    if (position.y === MAX_LANE) {
      return null;
    }
    return this.lanes[position.y];
  }
}

export class Lane {
  laneNumber: number;
  tiles: Tile[];
  start = 0;
  end = 0;
  get length() {
    return this.tiles.length;
  }

  constructor(laneNumber: number = 0, tiles: Tile[] = []) {
    this.laneNumber = laneNumber;
    this.tiles = tiles.map((t) => new Tile(t));

    if (this.tiles && this.tiles[0]) {
      this.start = this.getFirstTile().position.x;
      this.end = this.getLastTile().position.x;
    }
  }

  getFirstTile() {
    return this.tiles[0];
  }
  getLastTile() {
    return this.tiles[this.length - 1];
  }

  getLaneSlice(start: number, amount: number): Lane {
    if (this.tiles && this.tiles[0]) {
      return new Lane(0, this.tiles.slice(start, start + amount));
    }
    return new Lane();
  }

  numberOfHazards() {
    return this.tiles.filter((t) => t.tileType === TILE_TYPE.HAZARD).length;
  }
}

export class Tile {
  public position: Position;
  public surfaceObject: MAP_OBJECT;
  public occupiedByPlayerId: number;
  get tileType(): TILE_TYPE {
    return this.isHazard()
      ? TILE_TYPE.HAZARD
      : this.isPowerup()
      ? TILE_TYPE.POWERUP
      : this.isFinishLine()
      ? TILE_TYPE.FINISH_LINE
      : TILE_TYPE.EMPTY;
  }
  constructor(json: any) {
    this.position = json.position;
    this.surfaceObject = json.surfaceObject;
    this.occupiedByPlayerId = json.occupiedByPlayerId;
  }

  public isHazard(): boolean {
    return [MAP_OBJECT.MUD_MAP_OBJECT, MAP_OBJECT.OIL_SPILL_MAP_OBJECT].includes(this.surfaceObject);
  }

  public isPowerup() {
    return [MAP_OBJECT.BOOST_MAP_OBJECT, MAP_OBJECT.OIL_ITEM_MAP_OBJECT].includes(this.surfaceObject);
  }

  public isFinishLine() {
    return this.surfaceObject === MAP_OBJECT.FINISH_LINE_MAP_OBJECT;
  }
}
