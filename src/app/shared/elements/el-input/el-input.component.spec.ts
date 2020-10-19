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

  it('should return icon\'s name from settings', () => {
    const settings = fixture.componentInstance.settings = { iconName: 'faAt' };
    fixture.detectChanges();
    const name: string = fixture.componentInstance.getIconName();
    expect(name).toContain(settings.iconName);
  });

  it('should return true if icon is exist', () => {
    const testIconName: string = 'faAt';
    fixture.detectChanges();
    const bool = !!fixture.componentInstance.getIcon(testIconName);
    expect(bool).toBeTrue();
  });
});
