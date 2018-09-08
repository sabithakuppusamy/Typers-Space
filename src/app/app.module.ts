import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvinashComponent } from 'src/app/avinash/avinash.component';
import { SabithaComponent } from 'src/app/sabitha/sabitha.component';

@NgModule({
  declarations: [
    AppComponent,
    AvinashComponent,
    SabithaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
