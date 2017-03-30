import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { Component, Injectable, NgModule } from '@angular/core';
import { HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { KegListComponent }  from './keg-list.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { SellPintComponent } from './sell-pint.component';
import { SortingPipe } from './sorting.pipe';



@NgModule({
  imports: [ BrowserModule, FormsModule, Injectable, HttpModule ],
  declarations: [ AppComponent, KegListComponent, NewKegComponent, EditKegComponent, SellPintComponent, SortingPipe, ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
