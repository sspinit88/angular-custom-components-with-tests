import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlDataExtractorModule } from '../../directives/form-control-data-extractor/form-control-data-extractor.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    FormControlDataExtractorModule,
  ]
})
export class ElInputModule {
}
