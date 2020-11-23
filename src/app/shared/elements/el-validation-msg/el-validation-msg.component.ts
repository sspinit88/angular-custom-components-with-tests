import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { EL_VALIDATION_MSG } from './constants/el-validation-msg.constants';

@Component({
  selector: 'app-el-validation-msg',
  templateUrl: './el-validation-msg.component.html',
  styleUrls: ['./el-validation-msg.component.scss']
})
export class ElValidationMsgComponent {

  @Input() fieldControl: FormControl | AbstractControl;
  @Input() errorMsg: string;

  errors: string[] = [];
  msg = EL_VALIDATION_MSG;


  constructor() {
  }

  getErrorsArray(control: FormControl | AbstractControl): string[] {
    const field = { ...this.fieldControl };

    // FIXME delete
    // console.group('Class: ElValidationMsgComponent, Method: getErrorsArray');
    // console.log('field:', field);
    // console.log('errors():', this.errors);
    // console.groupEnd();

    return this.errors;
  }

  isTouched(control: FormControl | AbstractControl): boolean {
    if (!control) {
      return;
    }

    return control.touched;
  }

  isInvalid(control: FormControl | AbstractControl): boolean {
    if (!control) {
      return;
    }

    return control.invalid;
  }

  checkErrors(control: FormControl | AbstractControl): boolean {
    return !!this.isInvalid(control) && !!this.isTouched(control) && !!this.getErrorsArray(control)?.length;
  }

}
