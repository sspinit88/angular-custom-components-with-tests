import { ICONS } from './constants/input-icons.constant';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElInputComponent } from './el-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseElementModule } from '../base-elements/base-element/base-element.module';

describe('ElInputComponent', () => {
  let inputIcons;
  let fixture: ComponentFixture<ElInputComponent>;

  beforeEach(() => {
    inputIcons = ICONS;

    TestBed.configureTestingModule({
      declarations: [
        ElInputComponent,
      ],
      providers: [],
      imports: [
        FontAwesomeModule,
        BaseElementModule,
      ],
    });

    fixture = TestBed.createComponent(ElInputComponent);
  });

});
