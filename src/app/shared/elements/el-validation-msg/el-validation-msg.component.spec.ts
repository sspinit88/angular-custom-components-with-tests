import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElValidationMsgComponent } from './el-validation-msg.component';

describe('ElValidationMsgComponent', () => {
  let component: ElValidationMsgComponent;
  let fixture: ComponentFixture<ElValidationMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElValidationMsgComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ElValidationMsgComponent);
        component = fixture.componentInstance;
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
