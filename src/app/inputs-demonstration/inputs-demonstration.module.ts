import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ElInputModule } from '../shared/elements/el-input/el-input.module';

import { InputsDemonstrationComponent } from './inputs-demonstration/inputs-demonstration.component';
import { BaseInputsComponent } from './base-inputs/base-inputs.component';


const routes: Routes = [
  {
    path: '',
    component: InputsDemonstrationComponent,
  },
];

@NgModule({
  declarations: [
    InputsDemonstrationComponent,
    BaseInputsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ElInputModule,
  ]
})
export class InputsDemonstrationModule {
}
