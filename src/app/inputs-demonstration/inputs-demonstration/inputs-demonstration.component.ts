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
  emailSettings: ElInputSettings = {
    iconName: 'faAt',
    clearBtn: true,
    label: 'email',
    isFloatLabel: true,
  };

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
      name: ['1', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
      ]],
      // phone: [''],
    });

    this.isReady = true;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    // console.log('this.form.value():', this.form.value);
  }

  currentValue(v: string) {

  }


}
