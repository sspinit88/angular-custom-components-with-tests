import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ICONS } from './constants/input-icons.constant';
import { ElInputComponent } from './el-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DElInputRefDirective } from './directives/d-el-input-ref.directive';

@Component({
  selector: 'app-fake',
  template: `
    <form [formGroup]="form"
          (ngSubmit)="onSubmit()"
          class="c-form">
      <el-input>
        <input d-el-input-ref
               formControlName="name"
               type="text"
               id="name">
      </el-input>
      <button>submit</button>
    </form>
  `
})
class FakeComponent
  implements OnInit {

  form: FormGroup;

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
    });
  }

  onSubmit(): void {
  }
}

describe('ElInputComponent', () => {
  let inputIcons;
  let fixtureComponent: ComponentFixture<FakeComponent>;
  let elInpName;

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
      elInpName = fixtureComponent.debugElement.queryAll(By.directive(ElInputComponent))[0];
    });
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
