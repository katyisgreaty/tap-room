"use strict";
var Keg = (function () {
    function Keg(name, brand, price, alcoholContent) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.alcoholContent = alcoholContent;
        this.pintsLeft = 124;
        this.isFocusBrew = false;
        this.isBeingEdited = false;
    }
    ;
    Keg.prototype.addToInventory = function (newKeg) {
        Keg.inventory.push(newKeg);
    };
    Keg.inventory = [
        new Keg('Manny\'s', 'Georgetown Brewery', 7, 5.4),
        new Keg('Black Butte Porter', 'Deschutes Brewery', 8, 5.2),
        new Keg('Big Ballard', 'Redhook Brewery', 7, 5.4),
        new Keg('Coors Light', 'Coors', 5, 4),
        new Keg('PBR', 'Pabst', 5, 4.3),
        new Keg('Lush IPA', 'Fremont Brewery', 7.5, 5.1),
        new Keg('IPA', 'Lagunitas Brewery', 8, 5.4),
    ];
    return Keg;
}());
exports.Keg = Keg;
//# sourceMappingURL=keg.model.js.map