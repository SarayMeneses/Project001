import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service1Component } from './service1/service1.component';
import { CreditVerificationComponent } from './credit-verification/credit-verification.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ServiceComponent } from './service/service.component';
import { SpeedProductsComponent } from './speed-products/speed-products.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { HeaderComponent } from './header/header.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    Service1Component,
    
    CreditVerificationComponent,
    CustomerInformationComponent,
    OrderSummaryComponent,
    ServiceComponent,
    SpeedProductsComponent,
    SideMenuComponent,
    TermsAndConditionComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    MatIconModule,
   MatCheckboxModule,
   MatCardModule,
   MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }