import { Component } from '@angular/core';
import { Keg } from './models/keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <div class="">
    HELLOOOOOO
  </div>
    <div class="panel panel-success" *ngFor="let currentKeg of inventory" (click)="showDetails(currentKeg)">
      <div class="panel-heading">
        <h2>{{currentKeg.name}} by {{currentKeg.brand}}</h2>
      </div>
      <div *ngIf="currentKeg.isBeingEdited == false">
        <div class="panel-body" *ngIf="currentKeg.isFocusBrew">
          <h4>Alcohol Content: {{currentKeg.alcoholContent}}%</h4> <h4>\${{currentKeg.price}}.00/pint</h4>
          <button type="button" class="btn btn-primary" (click)="currentKeg.isBeingEdited = true">Edit Keg</button>
        </div>
      </div>
      <div *ngIf="currentKeg.isBeingEdited">
        <div class="panel-body">
          <edit-keg>Loading</edit-keg>
        </div>
      </div>
    </div>

  `
})

export class KegListComponent {
  inventory: Keg[] = Keg.inventory;

  showDetails(selectedKeg: Keg) {
    for(let individualKeg of this.inventory) {
      individualKeg.isFocusBrew = false;
    }
    selectedKeg.isFocusBrew = true;
  }
}
