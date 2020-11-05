import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';

import { DElInputRefDirective } from './directives/d-el-input-ref.directive';

import { ICONS } from './constants/input-icons.constant';

import { ElInputLabel, ElInputSettings } from '../../models/el-input-settings.model';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { ElInputIcons } from '../../models/el-input-icon.model';


@Component({
  selector: 'el-input',
  templateUrl: './el-input.component.html',
  styleUrls: ['./el-input.component.scss'],
})
export class ElInputComponent
  implements OnInit,
    AfterContentInit {

  elSettings: ElInputSettings = null;

  inputIcons: ElInputIcons = ICONS;
  closeBtnIcon: string = 'faWindowClose';

  @ContentChild(DElInputRefDirective)
  inputDirective: DElInputRefDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.elSettings = this.getElSettings();
  }

  getElSettings(): ElInputSettings {
    let res: ElInputSettings = null;

    if (
      !!this.inputDirective
      && !!this.inputDirective.elSettings
    ) {
      res = { ...this.inputDirective.elSettings };
    }

    return res;
  }

  getIcon(name: string): IconDefinition {
    return this.inputIcons[name];
  }

  getIconName(): string {
    let res: string = '';

    if (
      this.elSettings
      && !!this.elSettings.iconName
    ) {
      res = this.elSettings.iconName;
    }

    return res;
  }

  clearInput(): void {
    this.inputDirective.clearInput();
  }

  clearBtnExist(): boolean {
    let res: boolean = false;

    if (
      this.elSettings
      && !!this.elSettings.clearBtn
    ) {
      res = true;
    }

    return res;
  }

  getLabel(): ElInputLabel {
    let res: ElInputLabel = null;

    if (
      this.elSettings
      && !!this.elSettings.label
    ) {
      res = {
        text: this.elSettings.label,
        isFloat: !!this.elSettings.isFloatLabel,
        iconExist: !!this.elSettings.iconName
      };
    }

    return res;
  }

  showLabel(label: ElInputLabel): {} {
    const { text, isFloat, iconExist } = { ...label };

    return {
      'label': !!text,
      'float-label': !!isFloat,
      'float-label_with-left-icon': !!isFloat && !!iconExist,
      'float-label_position-top': !!isFloat && !!this.inputDirective.isFocus,
      'float-label_position-top-fixed': (!!isFloat && !this.inputDirective.isFocus) && !!this.inputDirective.value,
      'float-label_left-no': !iconExist,
    };
  }

  setValidate(): {} {
    return {
      'el-validation-field_valid': this.isElValid(),
      'el-validation-field_invalid': this.isElInvalid(),
      'el-validation-field_focus': this.isElFocus(),
    };
  }

  isElValid(): boolean {
    return this.inputDirective.isValid && !this.inputDirective.isInvalid;
  }

  isElInvalid(): boolean {
    return !this.inputDirective.isValid && this.inputDirective.isInvalid && this.inputDirective.isTouched;
  }

  isElFocus(): boolean {
    return this.inputDirective.isFocus;
  }

}
