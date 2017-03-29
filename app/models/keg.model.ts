
export class Keg {
  public pintsLeft: number = 124;
  public isFocusBrew: boolean = false;
  public isBeingEdited: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number){};

  static inventory: Keg[] = [
    new Keg('Manny\'s', 'Georgetown Brewery', 7, 5.4),
    new Keg('Black Butte Porter', 'Deschutes Brewery', 8, 5.2),
    new Keg('Big Ballard', 'Redhook Brewery', 7, 5.4),
    new Keg('Coors Light', 'Coors', 5, 4),
    new Keg('PBR', 'Pabst', 5, 4.3),
    new Keg('Lush IPA', 'Fremont Brewery', 7.5, 5.1),
    new Keg('IPA', 'Lagunitas Brewery', 8, 5.4),
  ];

  public addToInventory(newKeg: Keg) {
    Keg.inventory.push(newKeg);
  }
}
