// import { Component, Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
//
// import 'rxjs/add/operator/map';
//
// @Injectable()
// export class BeerApiDB {
//   constructor(private http: Http) {}
//   private targetURL = "http://api.brewerydb.com/v2/beers/?key=78429bded3df154045e0f95e41c88cb2&availableId=1";
//
//   getData() {
//     return this.http.get(this.targetURL).map(this.extractData);
//   }
//
//   private extractData(res: Response) {
//     console.log("THE RESULTS ARE " + res.json());
//   }
//
//   private handleError (error: any) {
//     let errMsg = (error.message) ? error.message :
//    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//    console.error(errMsg);
//    return Observable.throw(errMsg);
//   }
// }

// @Component({
//   selector: 'api-call',
//   template: '<h1>WHOOOOOA</h1>'
//   providers: [BeerApiDB]
// })
