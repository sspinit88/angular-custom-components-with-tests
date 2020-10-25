import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseElementComponent } from './base-element/base-element.component';

@NgModule({
  declarations: [
    BaseElementComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BaseElementComponent
  ],
})
export class BaseElementModule {
}
