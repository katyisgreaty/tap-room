import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { ApiRequest } from './models/apiRequest.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron bg-success">
    <button *ngIf="isEmployee === true" type="button" class="btn btn-warning btn-lg align-right" (click)="happyHour()">HAPPY HOUR</button>
    <h1>ERMAHGERHD Git Yer Bur Hur</h1>
    <!-- <button type="button" name="button" (click)="newApiCall()">Try Dat Call</button> -->
  </div>
  <div class="sidebar">
    <button *ngIf="isEmployee == false" type="button" (click)="toggleEmployeeMode()" class="btn button-spacer">Switch to Employee Mode</button>
    <button *ngIf="isEmployee" type="button" (click)="toggleEmployeeMode()" class="btn button-spacer">Switch to Patron Mode</button>
    <label for="max-price">Max Price for Beers</label>
    <input type="number" name="max-price" [value]="getMaxPrice()" (input)="setMaxPrice($event.target.value)">
    <button class="btn button-spacer" type="button" (click)="sortByPintsLeft()">Sort by Pints!</button>
  </div>
  <div class="container side-padding">
    <keg-list [isEmployee]="isEmployee" (deleteSender)="deleteKeg($event)">Loading...</keg-list>
    <new-keg *ngIf="isEmployee" (newClickSender)="addKeg($event)">Comin at you, bro</new-keg>
  </div>
  `
})

export class AppComponent {
  public isEmployee: boolean = false;

  public selectedKeg: Keg = null;

  happyHour() {
    for(let keg of Keg.inventory) {
      keg.modifyPrice(33);
    }
  }

  getMaxPrice() {
    return Keg.maxPrice;
  }
  setMaxPrice(newPrice: number) {
    Keg.maxPrice = newPrice;
  }

  toggleEmployeeMode() {
    this.isEmployee = (!(this.isEmployee));
    for(let keg of Keg.inventory) {
      keg.isBeingEdited = false;
    }
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
