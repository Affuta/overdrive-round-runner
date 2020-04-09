import { Component, Input, OnInit } from '@angular/core';
import { Round } from '../../models/round.model';
import { GameStateService } from '../../services/game-state.service';

const RUN_GAME_ON_INIT = false;

@Component({
  selector: 'app-round-container',
  templateUrl: './round-container.component.html',
  styleUrls: ['./round-container.component.scss'],
})
export class RoundContainerComponent implements OnInit {
  @Input()
  themeIndex = 7;

  @Input()
  showDisplayOptions = true;

  isRoundPlaying = false;
  currentRound: Round;
  showDetails = true;
  themes = [
    { name: 'Summer', className: 'summer-theme' },
    { name: 'Winter', className: 'winter-theme' },
    { name: 'Forest', className: 'forest-theme' },
    { name: 'Retro', className: 'retro-theme' },
    { name: 'Sunset', className: 'sunset-theme' },
    { name: 'Light', className: 'light-theme' },
    { name: 'Neon', className: 'neon-theme' },
    { name: 'Dark', className: 'dark-theme' },
    { name: 'Frost', className: 'frost-theme' },
    { name: 'Desert', className: 'desert-theme' },
  ];
  selectedTheme = this.themes[this.themeIndex];

  constructor(private _gameStateService: GameStateService) {}

  ngOnInit(): void {
    this.selectedTheme = this.themes[this.themeIndex];
    this.isRoundPlaying = RUN_GAME_ON_INIT;
    this._gameStateService.roundStart.subscribe((round: Round) => (this.currentRound = round));
    this._gameStateService.playingChanged.subscribe((isPlaying: boolean) => (this.isRoundPlaying = isPlaying));
    this._gameStateService.getRound(1);
    if (RUN_GAME_ON_INIT) {
      this._gameStateService.resumeGame();
    }
  }

  onPreviousRound() {
    this._gameStateService.getPreviousRound();
  }

  onToggleGame() {
    this._gameStateService.toggleGame();
  }

  onNextRound() {
    this._gameStateService.getNextRound();
  }

  onRestart() {
    this._gameStateService.restartGame();
  }
  onChangeTheme(themeClass) {
    this.selectedTheme = this.themes.find((t) => t.className === themeClass);
  }
}
