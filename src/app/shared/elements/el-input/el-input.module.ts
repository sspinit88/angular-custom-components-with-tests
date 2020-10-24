import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseElementModule } from '../base-elements/base-element/base-element.module';

import { ElInputComponent } from './el-input.component';
import { DElInputRefDirective } from './directives/d-el-input-ref.directive';

@NgModule({
  declarations: [
    ElInputComponent,
    DElInputRefDirective,
  ],
  exports: [
    ElInputComponent,
    DElInputRefDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BaseElementModule,
  ]
})
export class ElInputModule {
}
