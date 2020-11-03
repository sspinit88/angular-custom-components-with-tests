import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener, Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { RE_FORMAT_NUMBER, RE_NO_SPACES } from '../../../constants/reg-exp.constants';
import { ElInputSettings } from '../../../models/el-input-settings.model';
import { OTHERS_ERROR } from '../../../constants/error-message.constants';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlDataExtractorDirective } from '../../../directives/form-control-data-extractor/form-control-data-extractor.directive';

@Directive({
  selector: '[d-el-input-ref]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DElInputRefDirective),
      multi: true,
    }
  ],
})
export class DElInputRefDirective
  extends FormControlDataExtractorDirective
  implements OnInit, AfterContentInit {

  element: HTMLInputElement;
  elSettings: ElInputSettings = new ElInputSettings();
  emptyStr: string = '';
  hashInputType: string;
  inputTypes = {
    password: 'password',
  };

  @Input() set settings(data: ElInputSettings) {
    this.elSettings = { ...data };
  }

  @Output() currentValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    protected injector: Injector,
    private elRef: ElementRef,
  ) {
    super(injector);
    this.element = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.inputTypeHashing(this.element.type);
  }

  ngAfterContentInit(): void {
    this.controlInit();
    this.setStartValueToElement();
  }

  @HostListener('blur')
  onBlur() {
    this.isFocus = false;
    this.onTouched();
    this.switchIsTouched(this.control);
  }

  @HostListener('focus')
  onFocus() {
    this.isFocus = true;
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

    this.onTouched();
    this.changeElementValue(inputValue);
    this.changeValue(inputValue);
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

  setStartValueToElement(): void {
    this.changeElementValue(this.value);
    this.emitInputValue(this.value);
  }

  clearInput(): void {
    this.changeValue(null);
    this.changeElementValue(null);
    this.onChange();
  }

  emitInputValue(str: string): void {
    this.currentValue.emit(str);
  }

  changeElementValue(value: string): void {
    this.element.value = value;
  }

  changeValue(value: any): void {
    this.value = value;
    this.updateChangeValue(this.value, this.control);
  }

  inputTypeHashing(type: string): void {
    this.hashInputType = type;
  }

}
