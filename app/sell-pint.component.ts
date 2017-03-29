import { Component, Input } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'sell-pint',
  template: `
    <button type="button" (click)="decrementPint(currentKeg, 1)">Buy Pint</button>
    <button type="button" (click)="decrementPint(currentKeg, 2)">Buy Growler</button>
    <button type="button" (click)="decrementPint(currentKeg, 4)">Buy Large Growler</button>
    <button type="button" (click)="decrementPint(currentKeg, 20)">Buy 20 Pints I guess</button>
  `
})

export class SellPintComponent {
  @Input() currentKeg: Keg;

  public decrementPint(currentKeg: Keg, amount: number) {
    currentKeg.pintsLeft -= amount;
    currentKeg.pintsAreLow = (currentKeg.pintsLeft < 20);
    console.log("pints left: " + currentKeg.pintsLeft);
  }
}
