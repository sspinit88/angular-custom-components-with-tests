import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DElInputRefDirective } from './d-el-input-ref.directive';
import { Component, DebugElement, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ElInputSettings } from '../../../models/el-input-settings.model';
import { OTHERS_ERROR } from '../../../constants/error-message.constants';

@Component({
  selector: 'app-fake',
  template: `
    <el-input>
      <input d-el-input-ref
             [settings]="emailSettings"
             type="text">
    </el-input>
  `,
})
class FakeComponent {
  emailSettings: ElInputSettings = {
    iconName: 'afAt',
    password: false,
    onlyNumbers: ''
  };
}

describe('DElInputRefDirective', () => {

  let fixtureFake: ComponentFixture<FakeComponent>;
  let fakeComp: FakeComponent;
  let inputEl: DebugElement;
  let directive: DElInputRefDirective;
  let settings: ElInputSettings;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        DElInputRefDirective,
        FakeComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
      .then(() => {
        fixtureFake = TestBed.createComponent(FakeComponent);
        fakeComp = fixtureFake.componentInstance;
        inputEl = fixtureFake.debugElement.query(By.css('input'));
        directive = new DElInputRefDirective(new ElementRef(inputEl));
      });
  });

  it('should create directive', () => {
    expect(directive).toBeTruthy();
  });

  it('should set settings', () => {
    settings = {
      iconName: 'afAt',
      password: true,
    };
    directive.settings = settings;
    const resultSettings = directive.elSettings;
    expect(resultSettings.iconName).toEqual(settings.iconName);
  });

  it('should change focus (onBlur)', () => {
    directive.onBlur();
    expect(directive.focus).toBeFalse();
  });

  it('should change focus (onFocus)', () => {
    directive.onFocus();
    expect(directive.focus).toBeTruthy();
  });

  it('should emit input value', (done) => {
    const testValue: string = 'test!!!';

    directive.currentValue.subscribe(res => {
      expect(res).toEqual(testValue);
      done();
    });

    directive.emitInputValue(testValue);
  });

  it('should return string with only numbers', () => {
    const str = '';
    const testInpValue = '1 ddd2 eee3 45 6 7 89 0 ';
    const res: string = directive.takeOnlyNumbers(testInpValue, str);

    expect(res).toContain('1234567890');
  });

  it('should return string with only numbers, length = 5', () => {
    const str = '5,88';
    const testInpValue = '1 ddd2 eee3 45 6 7 89 0 ';
    const res: string = directive.takeOnlyNumbers(testInpValue, str);

    expect(res).toContain('12345');
    expect(res.length).toBe(5);
  });

  it(`should return error: ${OTHERS_ERROR.NaN}`, () => {
    const str = 'q';
    const testInpValue = '1 ddd2 eee3 45 6 7 89 0 ';

    expect(() => {
      directive.takeOnlyNumbers(testInpValue, str);
    }).toThrow(new Error(OTHERS_ERROR.NaN));
  });

  // it('should return string (length = 10)', () => {
  //
  // });

});
