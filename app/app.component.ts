import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Goooooood</h1>
  <keg-list>LoAdInG...</keg-list>
  <div class="well" *ngFor="let currentKeg of kegs">
    <h2>{{currentKeg.name}} by {{currentKeg.brand}}</h2>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Manny\'s', 'Georgetown Brewery', 7, 5.4),
    new Keg('Black Butte Porter', 'Deschutes Brewery', 8, 5.2),
    new Keg('Big Ballard', 'Redhook Brewery', 7, 5.4),
    new Keg('Coors Light', 'Coors', 5, 4),
    new Keg('PBR', 'Pabst', 5, 4.3),
    new Keg('Lush IPA', 'Fremont Brewery', 7.5, 5.1),
    new Keg('IPA', 'Lagunitas Brewery', 8, 5.4),
  ];
  public selectedKeg: Keg = null;

}

export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number){};
}
