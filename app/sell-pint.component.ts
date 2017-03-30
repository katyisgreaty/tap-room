import { Component, Input } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'sell-pint',
  template: `
    <button *ngIf="currentKeg.pintsLeft > 0" type="button" (click)="decrementPint(currentKeg, 1)">Buy Pint</button>
    <button *ngIf="currentKeg.pintsLeft > 1" type="button" (click)="decrementPint(currentKeg, 2)">Buy Growler</button>
    <button *ngIf="currentKeg.pintsLeft > 3" type="button" (click)="decrementPint(currentKeg, 4)">Buy Large Growler</button>
    <button *ngIf="currentKeg.pintsLeft > 19" type="button" (click)="decrementPint(currentKeg, 20)">Buy 20 Pints I guess</button>
  `
})

export class SellPintComponent {
  @Input() currentKeg: Keg;

  public decrementPint(currentKeg: Keg, amount: number) {
    currentKeg.pintsLeft -= amount;
    if(currentKeg.pintsLeft <=0) {
      currentKeg.pintsLeft = 0;
    }
    currentKeg.pintsAreLow = (currentKeg.pintsLeft < 20);
    console.log("pints left: " + currentKeg.pintsLeft);
  }
}
