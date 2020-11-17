import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInterface } from 'src/app/shared/interfaces/form.interface';
import { ElInputSettings } from '../../shared/models/el-input-settings.model';

@Component({
  selector: 'app-inputs-demonstration',
  templateUrl: './inputs-demonstration.component.html',
  styleUrls: ['./inputs-demonstration.component.scss']
})
export class InputsDemonstrationComponent
  implements OnInit,
    FormInterface {

  form: FormGroup;
  isReady: boolean;

  iconAndClearSettings: ElInputSettings = {
    iconName: 'faAt',
    clearBtn: true,
  };

  floatLabelSettings: ElInputSettings = {
    clearBtn: true,
    label: 'label',
    isFloatLabel: true,
  };

  clearInpSettings: ElInputSettings = {};

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.isReady = false;
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      simpleInputs: this.fb.group({
        clear: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        floatLabel: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        iconAndClear: ['', [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
        ]],
      }),
    });

    this.isReady = true;
  }

  getBaseElSettings(): {} {
    return {
      clear: this.clearInpSettings,
      floatLabel: this.floatLabelSettings,
      iconAndClear: this.iconAndClearSettings,
    };
  }

  onSubmit(): void {
    // if (this.form.invalid) {
    //   return;
    // }
  }

  currentValue(v: string) {

  }


}
