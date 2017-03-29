import { Component, Input } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'sell-pint',
  template: `
    <button type="button" (click)="decrementPint(currentKeg, 1)">Buy Pint</button>
  `
})

export class SellPintComponent {
  @Input() currentKeg: Keg;

  public decrementPint(currentKeg: Keg, amount: number) {
    currentKeg.pintsLeft -= amount;
  }
}
