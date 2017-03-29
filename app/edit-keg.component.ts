import { Component, Input } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div class="form-group col-md-6">
    <form>
      <label>Name of Beer</label>
      <input [value]="currentKeg.name" (input)="currentKeg.name = $event.target.value" class="form-control" type="text">
      <label>Brand</label>
      <input [value]="currentKeg.brand" (input)="currentKeg.brand = $event.target.value" class="form-control" type="text">
      <label>Price per Pint</label>
      <input  [value]="currentKeg.price" (input)="currentKeg.price = $event.target.value" class="form-control" type="number">
      <label>Alcohol Content (%)</label>
      <input [value]="currentKeg.alcoholContent" (input)="currentKeg.alcoholContent = $event.target.value" class="form-control" type="number">
    </form>
  </div>
  `
})

export class EditKegComponent {
  @Input() currentKeg: Keg;

  editKeg(selectedKeg: Keg) {
    selectedKeg.isBeingEdited = false;
  }
}
