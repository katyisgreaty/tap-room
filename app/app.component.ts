import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { ApiRequest } from './models/apiRequest.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron bg-success">
    <h1>Git yer bur hur</h1>
    <!-- <button type="button" name="button" (click)="newApiCall()">Try Dat Call</button> -->
  </div>
  <label for="max-price">Max Price for Beers</label>
  <input type="number" name="max-price" [value]="getMaxPrice()" (input)="setMaxPrice($event.target.value)">
  <div class="container">
    <button *ngIf="isEmployee == false" type="button" (click)="toggleEmployeeMode()" class="btn btn-success">Switch to Employee Mode</button>
    <button *ngIf="isEmployee" type="button" (click)="toggleEmployeeMode()" class="btn btn-success">Switch to Patron Mode</button>
    <hr>
    <button type="button" (click)="sortByPintsLeft()">Sort by Pints!</button>
    <br>
    <br>
    <keg-list [isEmployee]="isEmployee" (deleteSender)="deleteKeg($event)">Loading...</keg-list>
    <new-keg *ngIf="isEmployee" (newClickSender)="addKeg($event)">Comin at you, bro</new-keg>
  </div>
  `
})

export class AppComponent {
  public isEmployee: boolean = false;

  public selectedKeg: Keg = null;

  getMaxPrice() {
    return Keg.maxPrice;
  }
  setMaxPrice(newPrice: number) {
    Keg.maxPrice = newPrice;
  }

  toggleEmployeeMode() {
    this.isEmployee = (!(this.isEmployee));
  }

  sortByPintsLeft() {
    Keg.sortByPintsLeft();
  }

  addKeg(newKeg: Keg) {
    Keg.inventory.push(newKeg);
  }

  newApiCall(){
    ApiRequest.makeApiCall();
  }

  deleteKeg(selectedKeg: Keg) {
    for(let index = 0; index < Keg.inventory.length; index++) {
      if(Keg.inventory[index].kegId === selectedKeg.kegId) {
        Keg.inventory.splice(index, 1);
        break;
      }
    }
  }

}
