import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormControlDataExtractorDirective } from './form-control-data-extractor.directive';
import { OTHERS_ERROR } from '../../constants/error-message.constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElInputModule } from '../../elements/el-input/el-input.module';


@Component({
  selector: 'app-fake',
  template: `
    <form [formGroup]="form"
          class="c-form">
      <el-input>
        <input d-el-input-ref
               formControlName="name"
               type="text">
      </el-input>
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
      name: ['test value!'],
    });
  }
}

describe('FormControlDataExtractorDirective', () => {

  let fixtureFakeComponent: ComponentFixture<FakeComponent>;
  let componentInstance;
  let directive: FormControlDataExtractorDirective;
  let control: FormControl;
  // tslint:disable-next-line
  let injector;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        FakeComponent,
        FormControlDataExtractorDirective,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ElInputModule,
      ]
    }).compileComponents()
      .then(() => {
        fixtureFakeComponent = TestBed.createComponent(FakeComponent);
        componentInstance = fixtureFakeComponent.componentInstance;
        injector = getTestBed();
        directive = new FormControlDataExtractorDirective(getTestBed());
        fixtureFakeComponent.detectChanges();
        directive.control = componentInstance.form.controls.name;
        control = directive.control;
      });
  });

  it('should write value', () => {
    const v = 'test';
    directive.writeValue(v);
    expect(directive.value).toContain(v);
  });

  it('should set isTouched', () => {
    directive.switchIsTouched(control);
    expect(directive.isTouched).toBe(control.touched);
  });

  it('should set errors', () => {
    directive.getErrors(control);
    expect(directive.errors).toBe(control.errors);
  });

  it('should set isInvalid and isValid', () => {
    directive.setIsValid(control);
    expect(directive.isInvalid).toBe(control.invalid);
    expect(directive.isValid).toBe(control.valid);
  });

  it('should set isDisabled', () => {
    directive.setIsDisabled(control);
    expect(directive.isDisabled).toBe(control.disabled);
  });

  it('should set isPending', () => {
    directive.setIsPending(control);
    expect(directive.isPending).toBe(control.pending);
  });

  it('should set isPending', () => {
    directive.setIsPending(control);
    expect(directive.isPending).toBe(control.pending);
  });

  it('should set isDirty', () => {
    directive.setIsDirty(control);
    expect(directive.isDirty).toBe(control.dirty);
  });

  it('should set value', () => {
    directive.getValue(control);
    expect(directive.value).toContain(control.value);
  });

  it(`should return error: ${OTHERS_ERROR.componentIsMissing}`, () => {
    directive.control = null;
    expect(() => {
      directive.getErrors(directive.control);
    }).toThrow(new Error(OTHERS_ERROR.componentIsMissing));

    expect(() => {
      directive.setIsDisabled(directive.control);
    }).toThrow(new Error(OTHERS_ERROR.componentIsMissing));

    expect(() => {
      directive.setIsValid(directive.control);
    }).toThrow(new Error(OTHERS_ERROR.componentIsMissing));

    expect(() => {
      directive.setIsDirty(directive.control);
    }).toThrow(new Error(OTHERS_ERROR.componentIsMissing));

    expect(() => {
      directive.setIsPending(directive.control);
    }).toThrow(new Error(OTHERS_ERROR.componentIsMissing));

    expect(() => {
      directive.getValue(directive.control);
    }).toThrow(new Error(OTHERS_ERROR.componentIsMissing));
  });

});
