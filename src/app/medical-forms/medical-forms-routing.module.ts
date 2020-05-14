import { Routes, RouterModule } from "@angular/router";
import { SleepDisorderComponent } from "./sleep-disorder/sleep-disorder.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path: 'sleep-form', component: SleepDisorderComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MedicalFormsRoutingModule{}