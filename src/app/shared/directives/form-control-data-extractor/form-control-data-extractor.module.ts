import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlDataExtractorDirective } from './form-control-data-extractor.directive';

@NgModule({
  declarations: [
    FormControlDataExtractorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlDataExtractorDirective
  ],
})
export class FormControlDataExtractorModule {
}
