import {
  AfterContentInit,
  Component,
  ContentChild,
  forwardRef,
  Injector,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseElementComponent } from '../base-elements/base-element/base-element/base-element.component';
import { DElInputRefDirective } from './directives/d-el-input-ref.directive';

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
    AfterContentInit,
    ControlValueAccessor {

  inputIcons: ElInputIcons = ICONS;

  @ContentChild(DElInputRefDirective)
  inputDirective: DElInputRefDirective;

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // console.log('this.inputElement():', this.inputElement);
  }

  getIconName(): string {
    return this.getElSettings().iconName;
  }

  getIcon(name: string): IconDefinition {
    return this.inputIcons[name];
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

}
