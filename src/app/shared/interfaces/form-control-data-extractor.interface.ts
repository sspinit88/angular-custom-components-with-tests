import { AbstractControl, FormControl, NgControl } from '@angular/forms';

export interface FormControlDataExtractor {
  control: FormControl | AbstractControl;
  errors: {};
  isFocus: boolean;
  isTouched: boolean;
  isPending: boolean;
  isDirty: boolean;
  isDisabled: boolean;
  isValid: boolean;
  isInvalid: boolean;

  updateChangeValue(value, control): void;

  getNgControl(): NgControl;

  getControl(ngControl: NgControl): FormControl | AbstractControl;

  controlInit(): void;

  switchIsTouched(control: FormControl | AbstractControl): void;

  getValue(control: FormControl | AbstractControl): void;

  getErrors(control: FormControl | AbstractControl): void;

  setIsValid(control: FormControl | AbstractControl): void;

  setIsDisabled(control: FormControl | AbstractControl): void;

  setIsPending(control: FormControl | AbstractControl): void;

  setIsDirty(control: FormControl | AbstractControl): void;

  missingControl(control: FormControl | AbstractControl): void;
}
