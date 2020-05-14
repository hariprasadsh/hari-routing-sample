import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SleepDisorderComponent } from './sleep-disorder/sleep-disorder.component';
import { MedicalFormsRoutingModule } from './medical-forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MedicalFormsRoutingModule
  ],
  declarations: [SleepDisorderComponent]
})
export class MedicalFormsModule { }