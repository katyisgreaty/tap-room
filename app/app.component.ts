import { Component } from '@angular/core';
import { Keg } from './models/keg.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron bg-success">
    <h1>Git yer bur hur</h1>
  </div>
  <div class="container">
    <button *ngIf="isEmployee == false" type="button" (click)="toggleEmployeeMode()" class="btn btn-success">Switch to Employee Mode</button>
    <button *ngIf="isEmployee" type="button" (click)="toggleEmployeeMode()" class="btn btn-success">Switch to Patron Mode</button>
    <hr>
    <button type="button" (click)="sortByPintsLeft()">Sort by Pints!</button>
    <br>
    <br>
    <keg-list [isEmployee]="isEmployee">Loading...</keg-list>
    <new-keg *ngIf="isEmployee">Comin at you, bro</new-keg>
  </div>
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
