import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss'],
})
export class SpeedometerComponent {
  Math = Math;
  @Input()
  speed: number;

  createArray(size) {
    return new Array(size);
  }
}
