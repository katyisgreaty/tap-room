"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var keg_model_1 = require('../models/keg.model');
var KegListComponent = (function () {
    function KegListComponent() {
        this.inventory = keg_model_1.Keg.inventory;
    }
    KegListComponent.prototype.showDetails = function (selectedKeg) {
        for (var _i = 0, _a = this.inventory; _i < _a.length; _i++) {
            var individualKeg = _a[_i];
            individualKeg.isFocusBrew = false;
        }
        selectedKeg.isFocusBrew = true;
    };
    KegListComponent = __decorate([
        core_1.Component({
            selector: 'keg-list',
            template: "\n  <div class=\"\">\n    HELLOOOOOO\n  </div>\n    <div class=\"panel panel-success\" *ngFor=\"let currentKeg of inventory\" (click)=\"showDetails(currentKeg)\">\n      <div class=\"panel-heading\">\n        <h2>{{currentKeg.name}} by {{currentKeg.brand}}</h2>\n      </div>\n      <div *ngIf=\"currentKeg.isBeingEdited == false\">\n        <div class=\"panel-body\" *ngIf=\"currentKeg.isFocusBrew\">\n          <h4>Alcohol Content: {{currentKeg.alcoholContent}}%</h4> <h4>${{currentKeg.price}}.00/pint</h4>\n        </div>\n      </div>\n      <edit-keg [currentKeg]=\"currentKeg\" *ngIf=\"currentKeg.isBeingEdited\"></edit-keg>\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KegListComponent);
    return KegListComponent;
}());
exports.KegListComponent = KegListComponent;
//# sourceMappingURL=keg-list.component.js.map