import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsDemonstrationComponent } from './inputs-demonstration/inputs-demonstration.component';


const routes: Routes = [
  {
    path: '',
    component: InputsDemonstrationComponent,
  },
];

@NgModule({
  declarations: [
    InputsDemonstrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class InputsDemonstrationModule {
}
