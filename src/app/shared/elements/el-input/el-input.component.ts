import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseElementComponent } from '../base-elements/base-element/base-element/base-element.component';

import { ICONS } from './constants/input-icons.constant';

import { ElInputSettings } from '../../models/el-input-settings.model';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { ElInputIcons } from '../../models/el-input-icon.model';


@Component({
  selector: 'el-input',
  templateUrl: './el-input.component.html',
  styleUrls: ['./el-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ElInputComponent),
      multi: true,
    }
  ],
})
export class ElInputComponent
  extends BaseElementComponent
  implements OnInit,
    ControlValueAccessor {

  elSettings: ElInputSettings = new ElInputSettings();
  inputIcons: ElInputIcons = ICONS;

  @Input() set settings(data: ElInputSettings) {
    this.elSettings = { ...data };
  }

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

  getIconName(): string {
    return this.elSettings.iconName;
  }

  getIcon(name: string): IconDefinition {
    return this.inputIcons[name];
  }

}
