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
var editedKegComponent = (function () {
    function editedKegComponent() {
        this.currentKeg = null;
    }
    editedKegComponent.prototype.editKeg = function (selectedKeg) {
        selectedKeg.isBeingEdited = false;
    };
    editedKegComponent = __decorate([
        core_1.Component({
            selector: 'edit-keg',
            template: "\n  <div class=\"form-group col-md-6\">\n    <form>\n      <label>Name of Beer</label>\n      <input [(ngModel)]=\"currentKeg.name\" class=\"form-control\" type=\"text\">\n      <label>Brand</label>\n      <input [(ngModel)]=\"currentKeg.brand\" class=\"form-control\" type=\"text\">\n      <label>Price per Pint</label>\n      <input  [(ngModel)]=\"currentKeg.price\" class=\"form-control\" type=\"number\">\n      <label>Alcohol Content (%)</label>\n      <input [(ngModel)]=\"currentKeg.alcoholContent\" class=\"form-control\" type=\"number\">\n      <button type=\"button\" (click)=\"editKeg(currentKeg)\">Update</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], editedKegComponent);
    return editedKegComponent;
}());
exports.editedKegComponent = editedKegComponent;
//# sourceMappingURL=edit-keg.component.js.map