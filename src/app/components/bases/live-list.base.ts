import { AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';
import { Round } from '../../models/round.model';
import { GameState } from '../../models/game-state.model';
import { Player } from '../../models/player.model';

export abstract class LiveListBase<T> implements AfterViewInit {
  @Input()
  player: Player;

  @Input()
  showTotals = false;

  items: T[] = [];
  itemCount: { name: T; count: number }[] = [];
  @ViewChild('list', { static: false })
  listElement?: ElementRef<HTMLElement>;

  protected constructor(private _gameStateService: GameStateService) {
    _gameStateService.gameRestarted.subscribe(() => {
      this.items = [];
      this.itemCount = [];
    });

    _gameStateService.roundStart.subscribe((round: Round) => {
      this.onRoundChanged(round);
    });
  }

  public onRoundChanged(round: Round) {}

  public abstract onStateChanged(gameState: GameState);

  ngAfterViewInit(): void {
    this._gameStateService.roundStart.subscribe((round: Round) => {
      if (round.playerOneState.player.id === this.player.id) {
        this.onStateChanged(round.playerOneState);
      } else {
        this.onStateChanged(round.playerTwoState);
      }
      if (this.itemCount) {
        this.itemCount.sort((a, b) => b.count - a.count);
      }
      const nativeElement = this.listElement.nativeElement;
      if (nativeElement) {
        setTimeout(() => {
          nativeElement.scrollTop = nativeElement.scrollHeight;
        });
      }
    });
  }
}
