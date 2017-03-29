import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { FormsModule }  from '@angular/forms';
import { KegListComponent }  from './components/keg-list.component';
import { NewKegComponent } from './components/new-keg.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent, NewKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
