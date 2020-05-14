import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MedicalFormsModule } from './medical-forms/medical-forms.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MedicalFormsModule ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
