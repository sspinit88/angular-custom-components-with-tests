import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';

import { DElInputRefDirective } from './directives/d-el-input-ref.directive';

import { ICONS } from './constants/input-icons.constant';

import { ElInputSettings } from '../../models/el-input-settings.model';
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

  inputIcons: ElInputIcons = ICONS;

  @ContentChild(DElInputRefDirective)
  inputDirective: DElInputRefDirective;

  constructor() {
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
