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
var NewKegComponent = (function () {
    function NewKegComponent() {
        this.newKegName = null;
        this.newKegBrand = null;
        this.newKegPrice = null;
        this.newKegAlcoholContent = null;
    }
    NewKegComponent.prototype.addNewKeg = function () {
        if (this.newKegName === null || this.newKegBrand === null || this.newKegPrice === null || this.newKegAlcoholContent === null) {
            alert("Please fill out all the fields!");
        }
        else {
            var newKeg = new keg_model_1.Keg(this.newKegName, this.newKegBrand, this.newKegPrice, this.newKegAlcoholContent);
            keg_model_1.Keg.inventory.push(newKeg);
        }
    };
    NewKegComponent = __decorate([
        core_1.Component({
            selector: 'new-keg',
            template: "\n  <div class=\"form-group col-md-6\">\n    <form>\n      <label for=\"name\">Name of Beer</label>\n      <input name=\"name\" type=\"text\" (input)=\"newKegName = $event.target.value\" class=\"form-control\">\n      <label name=\"brand\" for = \"\">Brand</label>\n      <input type=\"text\" (input)=\"newKegBrand = $event.target.value\" class=\"form-control\">\n      <label name=\"price\" for = \"\">Price per Pint</label>\n      <input type=\"number\" (input)=\"newKegPrice = $event.target.value\" class=\"form-control\">\n      <label  for = \"\">Alcohol Content (%)</label>\n      <input name=\"alc\" type=\"number\" (input)=\"newKegAlcoholContent = $event.target.value\" class=\"form-control\">\n      <button type=\"button\" (click)=\"addNewKeg()\">Make a new Keg</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewKegComponent);
    return NewKegComponent;
}());
exports.NewKegComponent = NewKegComponent;
//# sourceMappingURL=new-keg.component.js.map