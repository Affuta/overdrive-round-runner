import { Injectable } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Round } from '../models/round.model';
import { GameState } from '../models/game-state.model';
import { PLAYER_COMMAND } from '../enums/player-command.enum';
import { PLAYER_ONE_DIR, PLAYER_TWO_DIR, ROUND_PLAYBACK_SPEED } from '../../custom-config';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private _gameState: GameState;
  roundStart = new Subject<Round>();
  stateChanged = new Subject<GameState>();
  interval: any;
  playbackSpeed = ROUND_PLAYBACK_SPEED;

  playingChanged = new Subject();
  gameRestarted = new Subject();

  get gameState(): GameState {
    return this._gameState;
  }

  set gameState(gameState: GameState) {
    this._gameState = gameState;
    this.stateChanged.next(gameState);
  }

  private _isRoundPlaying = false;

  get isRoundPlaying() {
    return this._isRoundPlaying;
  }

  set isRoundPlaying(isPlaying) {
    this._isRoundPlaying = isPlaying;
    if (!this._isRoundPlaying) {
      if (this.interval) {
        clearInterval(this.interval);
      }
    } else {
      this.resumeGame();
    }
    this.playingChanged.next(isPlaying);
  }

  private _currentRound = 1;

  constructor(private _httpClient: HttpClient) {}

  static getRoundNumberDir(num: number) {
    if (num >= 100) {
      return num;
    } else if (num < 100 && num >= 10) {
      return '0' + num;
    } else {
      return '00' + num;
    }
  }

  resumeGame() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.getRound(this._currentRound);
      this._currentRound++;
    }, this.playbackSpeed);
  }

  toggleGame() {
    this.isRoundPlaying = !!!this._isRoundPlaying;
  }

  getRound(roundNumber) {
    const $player1 = this.getPlayerRound(roundNumber, PLAYER_ONE_DIR);
    const $player2 = this.getPlayerRound(roundNumber, PLAYER_TWO_DIR);
    const $player1Command = this.getPlayerCommand(roundNumber, PLAYER_ONE_DIR);
    const $player2Command = this.getPlayerCommand(roundNumber, PLAYER_TWO_DIR);
    combineLatest(
      $player1,
      $player2,
      $player1Command,
      $player2Command,
      (playerOneState, playerTwoState, playerOneCommand, playerTwoCommand) =>
        new Round(playerOneState, playerTwoState, playerOneCommand, playerTwoCommand)
    ).subscribe(
      (newRound: Round) => {
        this.roundStart.next(newRound);
      },
      () => (this.isRoundPlaying = false)
    );
  }

  getPlayerRound(roundNumber, player): Observable<GameState> {
    return this._httpClient
      .get(`assets/rounds/Round ${GameStateService.getRoundNumberDir(roundNumber)}/${player}/JsonMap.json`, { responseType: 'json' })
      .pipe(map((res: any) => new GameState(res)));
  }

  getPlayerCommand(roundNumber, player): Observable<PLAYER_COMMAND> {
    return this._httpClient
      .get(`assets/rounds/Round ${GameStateService.getRoundNumberDir(roundNumber)}/${player}/PlayerCommand.txt`, { responseType: 'text' })
      .pipe(
        map((res: any) => {
          let valueString = '';
          Object.keys(res).forEach((key) => (valueString += res[key]));
          const commandString = valueString.slice('Command: '.length);
          return commandString.slice(0, commandString.indexOf('\n')) as PLAYER_COMMAND;
        })
      );
  }

  getPreviousRound() {
    this.getRound(this._currentRound--);
  }

  getNextRound() {
    this.getRound(this._currentRound++);
  }

  restartGame() {
    this.isRoundPlaying = false;
    this.gameRestarted.next();
    this._currentRound = 1;
    this.isRoundPlaying = true;
  }
}
