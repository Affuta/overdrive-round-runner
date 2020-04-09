import { Component, Input } from '@angular/core';
import { MAP_OBJECT } from '../../enums/map-object.enum';
import { Tile } from '../../models/race-track.model';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-race-tile',
  templateUrl: './race-tile.component.html',
  styleUrls: ['./race-tile.component.scss'],
})
export class RaceTileComponent {
  mapObject = MAP_OBJECT;

  @Input()
  highlightTiles = false;

  @Input()
  tile: Tile;

  @Input()
  player: Player;

  @Input()
  showTilesInPlayerRange = false;

  Math = Math;

  constructor() {}
}
