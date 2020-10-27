import { Directive, Injector } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FormControlDataExtractor } from '../../interfaces/form-control-data-extractor.interface';
import { OTHERS_ERROR } from '../../constants/error-message.constants';

@Directive({
  selector: '[d-form-control-data-extractor]'
})
export class FormControlDataExtractorDirective
  implements ControlValueAccessor,
    FormControlDataExtractor {

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

  constructor(
    protected injector: Injector,
  ) {
  }

  updateChangeValue(): void {
    this.onChange(this.value);
    this.getErrors(this.control);
    this.setIsDisabled(this.control);
    this.setIsValid(this.control);
    this.setIsDirty(this.control);
    this.setIsPending(this.control);
  }

  getNgControl(): NgControl {
    return this.injector.get(NgControl, null);
  }

  getControl(ngControl: NgControl): FormControl {
    return ngControl.control as FormControl;
  }

  controlInit(): void {
    const ngControl: NgControl = this.getNgControl();
    this.control = this.getControl(ngControl);
    this.getValue(this.control);
    this.switchIsTouched(this.control);
    this.getErrors(this.control);
    this.setIsDisabled(this.control);
    this.setIsValid(this.control);
    this.setIsDirty(this.control);
    this.setIsPending(this.control);
  }

  switchIsTouched(control: FormControl): void {
    try {
      this.isTouched = control.touched;
    } catch (e) {
      this.missingControl(control);
    }
  }

  getErrors(control: FormControl): void {
    try {
      this.errors = control.errors;
    } catch (e) {
      this.missingControl(control);
    }
  }

  setIsValid(control: FormControl): void {
    try {
      this.isInvalid = control.invalid;
      this.isValid = control.valid;
    } catch (e) {
      this.missingControl(control);
    }
  }

  setIsDisabled(control: FormControl): void {
    try {
      this.isDisabled = control.disabled;
    } catch (e) {
      this.missingControl(control);
    }
  }

  setIsPending(control: FormControl): void {
    try {
      this.isPending = control.pending;
    } catch (e) {
      this.missingControl(control);
    }
  }

  setIsDirty(control: FormControl): void {
    try {
      this.isDirty = control.dirty;
    } catch (e) {
      this.missingControl(control);
    }
  }

  getValue(control: FormControl): void {
    try {
      this.value = control.value;
    } catch (e) {
      this.missingControl(control);
    }
  }

  missingControl(control: FormControl): void {
    if (!control) {
      throw new Error(OTHERS_ERROR.componentIsMissing);
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
