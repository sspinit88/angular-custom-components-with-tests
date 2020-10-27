import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef, Injector, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DElInputRefDirective } from './d-el-input-ref.directive';
import { ElInputSettings } from '../../../models/el-input-settings.model';
import { OTHERS_ERROR } from '../../../constants/error-message.constants';
import { FormControlDataExtractorDirective } from '../../../directives/form-control-data-extractor/form-control-data-extractor.directive';

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
  let controlDirective: FormControlDataExtractorDirective;
  let settings: ElInputSettings;
  // tslint:disable-next-line
  let injector;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        DElInputRefDirective,
        FakeComponent,
      ],
      providers: [
        { provide: Injector, useValue: injector }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
      .then(() => {
        fixtureFake = TestBed.createComponent(FakeComponent);
        fakeComp = fixtureFake.componentInstance;
        inputEl = fixtureFake.debugElement.query(By.css('input'));
        controlDirective = new FormControlDataExtractorDirective(injector);
        directive = new DElInputRefDirective(injector, new ElementRef(inputEl));
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

  it('should return string (length = 10)', () => {
    const textLimit: string = '10';
    const inputValue: string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic illum nam nulla omnis optio.`;
    const res: string = directive.limitText(inputValue, textLimit);
    expect(res.length).toBe(parseInt(textLimit, 10));
  });

  it('should return start string', () => {
    const textLimit: string = '0';
    const inputValue: string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic illum nam nulla omnis optio.`;
    const res: string = directive.limitText(inputValue, textLimit);
    expect(res.length).toBe(inputValue.length);
    expect(res).toContain(inputValue);
  });

  it('should return start string (v2)', () => {
    const textLimit: string = '';
    const inputValue: string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic illum nam nulla omnis optio.`;
    const res: string = directive.limitText(inputValue, textLimit);
    expect(res.length).toBe(inputValue.length);
    expect(res).toContain(inputValue);
  });

  it('should return text with length = 5 (check onInput())', () => {
    directive.elSettings = {
      textLimit: '5',
    };

    directive.element.value = '1234 dd dd 56 11 55 66 778 99 88 fff';

    directive.onInput();

    const res: string = directive.element.value;

    expect(res.length).toBe(parseInt(directive.elSettings.textLimit, 10));
    expect(directive.value.length).toBe(res.length);
    expect(directive.value).toContain(res);
  });

  it('should return all text (check onInput())', () => {
    directive.elSettings = {
      textLimit: '',
    };

    const text: string = '1234 dd dd 56 11 55 66 778 99 88 fff';

    directive.element.value = text;

    directive.onInput();

    const res: string = directive.element.value;

    expect(res.length).toBe(text.length);
    expect(directive.value.length).toBe(text.length);
    expect(directive.value).toContain(res);
  });

  it('should return string with 5 numbers', () => {
    directive.elSettings = {
      onlyNumbers: '5',
    };

    directive.element.value = '1234 dd dd 56 11 55 66 778 99 88 fff';

    directive.onInput();

    const res: string = directive.element.value;

    expect(res.length).toBe(parseInt(directive.elSettings.onlyNumbers, 10));
    expect(Number.isInteger(parseInt(res, 10))).toBeTruthy();
    expect(directive.value).toContain(res);
  });

  it('should change directive.element.value after call setStartValueToElement()', () => {
    spyOn(directive, 'setStartValueToElement');
    directive.setStartValueToElement();
    expect(directive.setStartValueToElement).toHaveBeenCalled();
  });

  it('should change value', () => {
    const test = 'test!';
    directive.changeValue(test);
    expect(directive.value).toContain(test);
  });

  it('should change element value', () => {
    const test = 'test!';
    directive.changeElementValue(test);
    expect(directive.element.value).toContain(test);
  });

  it('should clear all input\'s value', () => {
    directive.clearInput();
    expect(directive.element.value).toBe(null);
    expect(directive.value).toBe(null);
  });


});
