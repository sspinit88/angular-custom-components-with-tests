import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseElementModule } from '../base-elements/base-element/base-element.module';

import { ElInputComponent } from './el-input.component';

@NgModule({
  declarations: [
    ElInputComponent
  ],
  exports: [
    ElInputComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BaseElementModule,
  ]
})
export class ElInputModule {
}
