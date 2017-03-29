import { Component } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div class="form-group col-md-6">
    <form>
      <label>Name of Beer</label>
      <input [(ngModel)]="currentKeg.name" class="form-control" type="text">
      <label>Brand</label>
      <input [(ngModel)]="currentKeg.brand" class="form-control" type="text">
      <label>Price per Pint</label>
      <input  [(ngModel)]="currentKeg.price" class="form-control" type="number">
      <label>Alcohol Content (%)</label>
      <input [(ngModel)]="currentKeg.alcoholContent" class="form-control" type="number">
      <button type="button" (click)="editKeg(currentKeg)">Update</button>
    </form>
  </div>
  `
})

export class editedKegComponent {
  currentKeg: Keg = null;

  editKeg(selectedKeg: Keg) {
    selectedKeg.isBeingEdited = false;
  }
}
