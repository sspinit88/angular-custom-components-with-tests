import { FormControl, NgControl } from '@angular/forms';

export interface FormControlDataExtractor {
  control: FormControl;
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

  getControl(ngControl: NgControl): FormControl;

  controlInit(): void;

  switchIsTouched(control: FormControl): void;

  getValue(control: FormControl): void;

  getErrors(control: FormControl): void;

  setIsValid(control: FormControl): void;

  setIsDisabled(control: FormControl): void;

  setIsPending(control: FormControl): void;

  setIsDirty(control: FormControl): void;

  missingControl(control: FormControl): void;
}
