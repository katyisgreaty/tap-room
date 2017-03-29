import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <div class="form-group col-md-6">
      <form>
        <label for="name">Name of Beer</label>
        <input name="name" type="text" (input)="newKegName = $event.target.value" class="form-control">
        <label name="brand" for = "">Brand</label>
        <input type="text" (input)="newKegBrand = $event.target.value" class="form-control">
        <label name="price" for = "">Price per Pint</label>
        <input type="number" (input)="newKegPrice = $event.target.value" class="form-control">
        <label  for = "">Alcohol Content (%)</label>
        <input name="alc" type="number" (input)="newKegAlcoholContent = $event.target.value" class="form-control">
        <button type="button" (click)="addNewKeg()">Make a new Keg</button>
      </form>
    </div>
  `
})

export class NewKegComponent {
  newKegName: string = null;
  newKegBrand: string = null;
  newKegPrice: number = null;
  newKegAlcoholContent: number = null;

  addNewKeg(){
    if(this.newKegName === null || this.newKegBrand === null || this.newKegPrice === null || this.newKegAlcoholContent === null) {
      alert("Please fill out all the fields!");
    } else {
      var newKeg = new Keg(this.newKegName, this.newKegBrand, this.newKegPrice, this.newKegAlcoholContent);
      Keg.inventory.push(newKeg);
    }
  }
}
