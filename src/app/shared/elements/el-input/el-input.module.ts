import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElInputComponent } from './el-input.component';



@NgModule({
  declarations: [ElInputComponent],
  exports: [
    ElInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElInputModule { }
