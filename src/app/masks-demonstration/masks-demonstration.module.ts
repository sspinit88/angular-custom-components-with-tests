import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MasksDemonstrationComponent } from './masks-demonstration/masks-demonstration.component';

const routes: Routes = [
  {
    path: '',
    component: MasksDemonstrationComponent,
  },
];

@NgModule({
  declarations: [
    MasksDemonstrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MasksDemonstrationModule {
}
