export class Keg {
  public pintsLeft: number = 124;
  public isFocusBrew: boolean = false;
  public isBeingEdited: boolean = false;
  public pintsAreLow: boolean = false;
  public salePrice: number;
  public kegId: number;
  constructor(public name: string, public brand: string, public basePrice: number, public alcoholContent: number) {
    this.salePrice = basePrice;
    this.kegId = Keg.idCounter;
    Keg.idCounter++;
  };

  static idCounter: number = 0;
  static maxPrice: number = 100;

  static inventory: Keg[] = [
    new Keg('Manny\'s', 'Georgetown Brewery', 7, 5.4),
    new Keg('Black Butte Porter', 'Deschutes Brewery', 8, 5.2),
    new Keg('Big Ballard', 'Redhook Brewery', 7, 5.4),
    new Keg('Coors Light', 'Coors', 5, 4),
    new Keg('PBR', 'Pabst', 5, 4.3),
    new Keg('Lush IPA', 'Fremont Brewery', 7.5, 5.1),
    new Keg('IPA', 'Lagunitas Brewery', 8, 5.4),
  ];

  public resetPrice() {
    this.salePrice = this.basePrice;
  }

  public modifyPrice(percentOff: number) {
    this.salePrice = this.basePrice * (1 - (percentOff/100));
    this.salePrice = Math.round(this.salePrice * 100) / 100;
  }

  public static sortByPintsLeft() {
    var copyArray = Keg.inventory;
    for(let j = 0; j < copyArray.length - 1; j++) {
      for(let i = 0; i < copyArray.length - (1 + j); i++) {
        if (copyArray[i].pintsLeft > copyArray[i+1].pintsLeft) {
          let placeholder = copyArray[i];
          copyArray[i] = copyArray[i + 1];
          copyArray[i + 1] = placeholder;
          console.log("swapped");
        }
      }
    }
    Keg.inventory = copyArray
  }
}
