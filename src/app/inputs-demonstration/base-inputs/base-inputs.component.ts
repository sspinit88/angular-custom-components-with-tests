import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElInputSettings } from '../../shared/models/el-input-settings.model';


@Component({
  selector: 'app-base-inputs',
  templateUrl: './base-inputs.component.html',
  styleUrls: ['./base-inputs.component.scss']
})
export class BaseInputsComponent {

  form: FormGroup;

  clearInpSettings: ElInputSettings;
  floatLabelSettings: ElInputSettings;
  iconAndClearSettings: ElInputSettings;

  @Input() set itmForm(fg: FormGroup) {
    this.form = fg;

  }

  @Input() set elFormSettings(settings) {
    this.iconAndClearSettings = { ...settings.iconAndClear };
    this.floatLabelSettings = { ...settings.floatLabel };
    this.clearInpSettings = { ...settings.clear };
  }

  constructor() {
  }

}
