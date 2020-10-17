import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TabsDemonstrationComponent } from './tabs-demonstration/tabs-demonstration.component';

const routes: Routes = [
  {
    path: '',
    component: TabsDemonstrationComponent,
  }
];

@NgModule({
  declarations: [
    TabsDemonstrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TabsDemonstrationModule {
}
