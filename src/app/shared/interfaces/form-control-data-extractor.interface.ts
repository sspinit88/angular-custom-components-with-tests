import { FormControl } from '@angular/forms';

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


  updateChangeValue(): void;

  controlInit(): void;

  switchIsTouched(): void;

  getErrors(): void;

  setIsValid(): void;

  setIsDisabled(): void;

  setIsPending(): void;

  setIsDirty(): void;

  missingControl(): void;
}
