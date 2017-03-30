"use strict";
var Keg = (function () {
    function Keg(name, brand, basePrice, alcoholContent) {
        this.name = name;
        this.brand = brand;
        this.basePrice = basePrice;
        this.alcoholContent = alcoholContent;
        this.pintsLeft = 124;
        this.isFocusBrew = false;
        this.isBeingEdited = false;
        this.pintsAreLow = false;
        this.salePrice = basePrice;
        this.kegId = Keg.idCounter;
        Keg.idCounter++;
    }
    ;
    Keg.prototype.resetPrice = function () {
        this.salePrice = this.basePrice;
    };
    Keg.prototype.modifyPrice = function (percentOff) {
        this.salePrice = this.basePrice * (1 - (percentOff / 100));
        this.salePrice = Math.round(this.salePrice * 100) / 100;
    };
    Keg.sortByPintsLeft = function () {
        var copyArray = Keg.inventory;
        for (var j = 0; j < copyArray.length - 1; j++) {
            for (var i = 0; i < copyArray.length - (1 + j); i++) {
                if (copyArray[i].pintsLeft > copyArray[i + 1].pintsLeft) {
                    var placeholder = copyArray[i];
                    copyArray[i] = copyArray[i + 1];
                    copyArray[i + 1] = placeholder;
                    console.log("swapped");
                }
            }
        }
        Keg.inventory = copyArray;
    };
    Keg.idCounter = 0;
    Keg.maxPrice = 100;
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