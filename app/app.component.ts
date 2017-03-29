import { Component } from '@angular/core';
import { Keg } from './models/keg.model';


@Component({
  selector: 'app-root',
  template: `
  <button type="button" (click)="toggleEmployeeMode()" class="btn btn-success">Switch to Employee Mode</button>
  <h1>Goooooood</h1>
  <button type="button" (click)="sortByPintsLeft()">Sort by Pints!</button>
  <keg-list [isEmployee]="isEmployee">Loading...</keg-list>
  <new-keg *ngIf="isEmployee">Comin at you, bro</new-keg>
  <div *ngIf="isEmployee == false">NEED MORE MINERALS</div>
  `
})

export class AppComponent {
  public isEmployee: boolean = false;

  public selectedKeg: Keg = null;

  toggleEmployeeMode() {
    this.isEmployee = (!(this.isEmployee));
  }

  sortByPintsLeft() {
    Keg.sortByPintsLeft();
  }

}
