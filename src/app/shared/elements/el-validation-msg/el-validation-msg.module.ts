import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElValidationMsgComponent } from './el-validation-msg.component';


const itemComponents: any[] = [
  ElValidationMsgComponent
];

@NgModule({
  declarations: [
    ...itemComponents,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...itemComponents,
  ]
})
export class ElValidationMsgModule {
}
