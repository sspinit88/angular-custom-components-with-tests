import { Component, Injector } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FormControlDataExtractor } from 'src/app/shared/interfaces/form-control-data-extractor.interface';

@Component({
  selector: 'app-base-element',
  template: '',
})
export class BaseElementComponent
  implements ControlValueAccessor,
    FormControlDataExtractor {

  constructor(
    protected injector: Injector,
  ) {
  }

  value: any = null;
  control: FormControl;
  errors: {};

  isFocus: boolean;
  isTouched: boolean;
  isPending: boolean;
  isDirty: boolean;
  isDisabled: boolean;
  isValid: boolean;
  isInvalid: boolean;


  updateChangeValue(): void {
    this.onChange(this.value);
    this.getErrors();
    this.setIsDisabled();
    this.setIsValid();
    this.setIsDirty();
    this.setIsPending();
  }

  controlInit(): void {
    const ngControl: NgControl = this.injector.get(NgControl, null);

    if (ngControl) {
      this.control = ngControl.control as FormControl;

      this.switchIsTouched();
      this.getErrors();
      this.setIsDisabled();
      this.setIsValid();
      this.setIsDirty();
      this.setIsPending();

    } else {
      throw new Error('Component is missing form control binding');
    }
  }

  switchIsTouched(): void {
    throw new Error('Method not implemented.');
  }

  getErrors(): void {
    try {
      this.errors = this.control.errors;
    } catch (e) {
      this.missingControl();
    }
  }

  setIsValid(): void {
    try {
      this.isInvalid = this.control.invalid;
      this.isValid = this.control.valid;
    } catch (e) {
      this.missingControl();
    }
  }

  setIsDisabled(): void {
    this.missingControl();
    this.isDisabled = this.control.disabled;
  }

  setIsPending(): void {
    this.missingControl();
    this.isPending = this.control.pending;
  }

  setIsDirty(): void {
    this.missingControl();
    this.isDirty = this.control.dirty;
  }

  missingControl(): void {
    if (!this.control) {
      throw new Error('Component is missing form control binding');
    }
  }

  /*
* ControlValueAccessor methods
* */

  onChange: any = () => {
  }
  onTouched: any = () => {
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

}
