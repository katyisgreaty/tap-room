import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Goooooood</h1>
  <keg-list>Loading...</keg-list>
  `
})

export class AppComponent {

  public selectedKeg: Keg = null;

}
