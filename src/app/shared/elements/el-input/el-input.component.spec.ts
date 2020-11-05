import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ICONS } from './constants/input-icons.constant';
import { ElInputComponent } from './el-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DElInputRefDirective } from './directives/d-el-input-ref.directive';
import { ElInputSettings } from '../../models/el-input-settings.model';

@Component({
  selector: 'app-fake',
  template: `
    <form [formGroup]="form"
          (ngSubmit)="onSubmit()"
          class="c-form">
      <el-input>
        <input d-el-input-ref
               formControlName="name"
               type="text">
      </el-input>
      <el-input>
        <input d-el-input-ref
               [settings]="emailSettings"
               formControlName="iconAndEmail"
               type="text">
      </el-input>
      <el-input>
        <input d-el-input-ref
               [settings]="labelSettings"
               formControlName="label"
               type="text">
      </el-input>
      <el-input>
        <input d-el-input-ref
               [settings]="floatSettings"
               formControlName="labelFloat"
               type="text">
      </el-input>
      <button>submit</button>
    </form>
  `
})
class FakeComponent
  implements OnInit {

  form: FormGroup;
  emailSettings: ElInputSettings = {
    iconName: 'faAt',
    clearBtn: true,
  };

  labelSettings: ElInputSettings = {
    label: 'какое-то поле',
    clearBtn: true,
  };

  floatSettings: ElInputSettings = {
    label: 'label',
    isFloatLabel: true,
    clearBtn: true,
  };

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)]
      ],
      iconAndEmail: ['test@email.ru'],
      label: [''],
      labelFloat: [''],
    });
  }

  onSubmit(): void {
  }
}

describe('ElInputComponent', () => {
  let inputIcons;
  let fixtureComponent: ComponentFixture<FakeComponent>;
  let elInpName;
  let elInpIconAndEmail;
  let elInpLabel;
  let elInpFloatLabel;

  beforeEach(async () => {
    inputIcons = ICONS;

    TestBed.configureTestingModule({
      declarations: [
        FakeComponent,
        ElInputComponent,
        DElInputRefDirective,
      ],
      providers: [],
      imports: [
        FontAwesomeModule,
        ReactiveFormsModule,
      ],
      // schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents().then(() => {
      fixtureComponent = TestBed.createComponent(FakeComponent);

      const inputs = fixtureComponent.debugElement.queryAll(By.directive(ElInputComponent));

      elInpName = inputs[0];
      elInpIconAndEmail = inputs[1];
      elInpLabel = inputs[2];
      elInpFloatLabel = inputs[3];
    });
  });

  it('should return settings for label', () => {
    fixtureComponent.detectChanges();

    const label = elInpFloatLabel.componentInstance.getLabel();

    expect(label).toBeTruthy();
  });

  it('should clear input after click to btn', () => {
    fixtureComponent.detectChanges();

    elInpIconAndEmail.componentInstance.clearInput();

    const valueISNotExist: boolean = !!elInpIconAndEmail.componentInstance.inputDirective.value;

    expect(valueISNotExist).toBeFalse();
  });

  it('should not exist button for input clearing', () => {
    fixtureComponent.detectChanges();

    const res: boolean = !!elInpName.nativeElement.querySelector('.btn-clear');

    expect(res).toBeFalse();
  });

  it('should clear btn is exist', () => {
    fixtureComponent.detectChanges();

    const res: boolean = !!elInpIconAndEmail.nativeElement.querySelector('.btn-clear');

    expect(res).toBeTrue();
  });

  it('should not return icon name', () => {
    fixtureComponent.detectChanges();

    const controlIconName: boolean = !!elInpName.componentInstance.inputDirective.elSettings.iconName;
    const res: boolean = !!elInpName.componentInstance.getIconName();
    const iconNotExist: boolean = !!elInpName.nativeElement.querySelector('.icon');

    expect(res).toBeFalse();
    expect(controlIconName).toBeFalse();
    expect(iconNotExist).toBeFalse();
  });

  it('should get iconName', () => {
    fixtureComponent.detectChanges();

    const controlIconName: string = fixtureComponent.componentInstance.emailSettings.iconName;
    const res: string = elInpIconAndEmail.componentInstance.getIconName();
    const iconExist: boolean = !!elInpIconAndEmail.nativeElement.querySelector('fa-icon');

    expect(res).toBe(controlIconName);
    expect(iconExist).toBeTruthy();
  });

  it('should get elSettings', () => {
    fixtureComponent.detectChanges();

    const controlSettings: ElInputSettings = fixtureComponent.componentInstance.emailSettings;
    const res: ElInputSettings = elInpIconAndEmail.componentInstance.elSettings;

    expect(res).toEqual(controlSettings);
  });

  it('should set class: "el-validation-field_invalid"', () => {
    fixtureComponent.detectChanges();

    elInpName.nativeElement.querySelector('input').dispatchEvent(new Event('blur'));

    elInpName.componentInstance.inputDirective.ngAfterContentInit();

    const res = elInpName.componentInstance.setValidate()['el-validation-field_invalid'];

    expect(res).toBeTruthy();
  });

  it('should set class: "el-validation-field_valid"', () => {
    fixtureComponent.detectChanges();

    fixtureComponent.componentInstance.form.controls['name'].setValue('1234546');
    elInpName.componentInstance.inputDirective.ngAfterContentInit();

    const res = elInpName.componentInstance.setValidate()['el-validation-field_valid'];
    expect(res).toBeTruthy();
  });

  it('should set class: "el-validation-field_focus"', () => {
    const className = 'el-validation-field_focus';
    // TODO устанавливаю фокус на input
    elInpName.nativeElement.querySelector('input').dispatchEvent(new Event('focus'));

    fixtureComponent.detectChanges();

    const isFocus = elInpName.componentInstance.setValidate()[className];
    const res = !!elInpName.nativeElement.querySelector(`.${className}`);

    expect(isFocus).toBeTruthy();
    expect(res).toBeTruthy();
  });

  it('should set input\'s value', () => {
    fixtureComponent.detectChanges();

    const formControlValue: string = fixtureComponent.componentInstance.form.controls['name'].value;
    const value: string = elInpName.nativeElement.querySelector('input').value;

    expect(value).toBe(formControlValue);
  });

  it('should create fake component with el-input', () => {
    expect(fixtureComponent).toBeDefined();
  });

});
