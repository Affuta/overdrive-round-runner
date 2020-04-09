import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceTileComponent } from './race-tile.component';

describe('RaceTileComponent', () => {
  let component: RaceTileComponent;
  let fixture: ComponentFixture<RaceTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RaceTileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
