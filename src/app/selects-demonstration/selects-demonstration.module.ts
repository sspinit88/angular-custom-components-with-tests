import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SelectsDemonstrationComponent } from './selects-demonstration/selects-demonstration.component';

const routes: Routes = [
  {
    path: '',
    component: SelectsDemonstrationComponent,
  }
];

@NgModule({
  declarations: [
    SelectsDemonstrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SelectsDemonstrationModule {
}
