import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "priceSorted",
  pure: false
})

export class SortingPipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i=0; i<input.length; i++) {
      if (input[i].price <= Keg.maxPrice) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
