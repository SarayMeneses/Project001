import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service1Component } from './service1/service1.component';



@NgModule({
  declarations: [
    AppComponent,
    Service1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
