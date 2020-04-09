import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoundDisplayComponent } from './components/round-display/round-display.component';
import { RaceTrackComponent } from './components/race-track/race-track.component';
import { RaceTileComponent } from './components/race-tile/race-tile.component';
import { SpeedometerComponent } from './components/widgets/speedometer/speedometer.component';
import { PlayerMovesDisplayComponent } from './components/stats-panel/player-moves-display/player-moves-display.component';
import { PlayerStateDisplayComponent } from './components/stats-panel/player-state-display/player-state-display.component';
import { RoundContainerComponent } from './components/round-container/round-container.component';
import { PlayerTakenMovesComponent } from './components/stats-panel/player-taken-moves/player-taken-moves.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RoundDisplayComponent,
    RaceTrackComponent,
    RaceTileComponent,
    SpeedometerComponent,
    PlayerMovesDisplayComponent,
    PlayerStateDisplayComponent,
    RoundContainerComponent,
    PlayerTakenMovesComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
