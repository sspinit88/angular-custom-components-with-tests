import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { RE_FORMAT_NUMBER, RE_NO_SPACES } from '../../../constants/reg-exp.constants';
import { ElInputSettings } from '../../../models/el-input-settings.model';
import { OTHERS_ERROR } from '../../../constants/error-message.constants';

@Directive({
  selector: '[d-el-input-ref]'
})
export class DElInputRefDirective {

  element: HTMLInputElement;
  elSettings: ElInputSettings = new ElInputSettings();
  value: string;
  focus: boolean;
  emptyStr: string = '';

  @Input() set settings(data: ElInputSettings) {
    this.elSettings = { ...data };
  }

  @Output() currentValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private elRef: ElementRef,
  ) {
    this.element = this.elRef.nativeElement;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('input')
  onInput() {
    let inputValue: string = this.element.value.trim();

    if (
      this.elSettings
      && this.elSettings.onlyNumbers
    ) {
      inputValue = this.takeOnlyNumbers(inputValue, this.elSettings.onlyNumbers);
    }

    if (
      this.elSettings
      && this.elSettings.textLimit
      && Number.isInteger(parseInt(this.elSettings.textLimit, 10))
    ) {
      inputValue = this.limitText(inputValue, this.elSettings.textLimit);
    }

    this.element.value = inputValue;
    this.value = inputValue;

    this.emitInputValue(inputValue);
  }

  takeOnlyNumbers(inputValue: string, onlyNumbers: string): string {
    if (
      !Number.isInteger(parseInt(onlyNumbers, 10))
      && onlyNumbers !== this.emptyStr
    ) {
      throw new Error(OTHERS_ERROR.NaN);
    }

    const value = inputValue.replace(RE_NO_SPACES, this.emptyStr);
    const maxLength: number = parseInt(onlyNumbers, 10);

    if (!maxLength) {
      return value.replace(RE_FORMAT_NUMBER, this.emptyStr);
    }

    return value.replace(RE_FORMAT_NUMBER, this.emptyStr).substring(0, maxLength);
  }

  limitText(inputValue: string, maxLength: string): string {
    if (
      !Number.isInteger(parseInt(maxLength, 10))
      && maxLength !== this.emptyStr
    ) {
      throw new Error(OTHERS_ERROR.NaN);
    }

    const limit: number = parseInt(maxLength, 10);

    if (!limit) {
      return inputValue;
    }
    return inputValue.substring(0, limit);
  }

  emitInputValue(str: string): void {
    this.currentValue.emit(str);
  }

}
