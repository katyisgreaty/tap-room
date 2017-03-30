import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './models/keg.model';


@Component({
  selector: 'keg-list',
  template: `
    <div [class]="assignBackground(currentKeg)" *ngFor="let currentKeg of inventory | priceSorted" (click)="showDetails(currentKeg)">
      <div class="panel-heading">
        <button type="button" class="btn-lg align-right" *ngIf="currentKeg.pintsAreLow" disabled> <span class="glyphicon glyphicon-alert" aria-hidden="true"></span></button>
        <h2>{{currentKeg.name}} by {{currentKeg.brand}}</h2>
      </div>
      <div *ngIf="currentKeg.isBeingEdited == false">
        <div class="panel-body" *ngIf="currentKeg.isFocusBrew">
          <h4>Alcohol Content: {{currentKeg.alcoholContent}}%</h4> <h4>\${{currentKeg.price}}.00/pint</h4>
          <h4>There are {{currentKeg.pintsLeft}} pints left in this keg</h4>
          <sell-pint *ngIf="isEmployee" [currentKeg]="currentKeg"></sell-pint>
          <button *ngIf="isEmployee" type="button" class="btn btn-primary" (click)="toggleEditing(currentKeg)">Edit Keg</button>
        </div>
      </div>
      <div *ngIf="currentKeg.isBeingEdited">
        <div class="panel-body">
          <edit-keg [currentKeg]="currentKeg" (clickSender)="sendDeleteMessage($event)">Loading</edit-keg>
          <button type="button" class="btn btn-primary" (click)="toggleEditing(currentKeg)">Finish Editing</button>
        </div>
      </div>
    </div>

  `
})

export class KegListComponent {
  @Input() isEmployee: boolean;
  @Output() deleteSender = new EventEmitter();

  inventory: Keg[] = Keg.inventory;

  showDetails(selectedKeg: Keg) {
    for(let individualKeg of this.inventory) {
      if(individualKeg.kegId !== selectedKeg.kegId){
          individualKeg.isFocusBrew = false;
      }
    }
    selectedKeg.isFocusBrew = (!(selectedKeg.isFocusBrew));
  }

  assignBackground(selectedKeg: Keg) {
    if(this.isEmployee) {
      if(selectedKeg.pintsLeft > 50) {
        return "panel panel-success";
      } else if (selectedKeg.pintsLeft > 10) {
        return "panel panel-warning";
      } else {
        return "panel panel-danger";
      }
    } else {
      return "panel panel-primary";
    }
  }

  toggleEditing(selectedKeg: Keg) {
    selectedKeg.isBeingEdited = (!(selectedKeg.isBeingEdited));
    console.log("toggles");
  }

  sendDeleteMessage(selectedKeg: Keg) {
    this.deleteSender.emit(selectedKeg);
  }
}
