import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {

  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
      ],
      providers: [],
    });
    fixture = TestBed.createComponent(HeaderComponent);
  });

  it('should set title', () => {
    const title = fixture.componentInstance.title = 'test title';
    fixture.detectChanges();
    const elContent = fixture.debugElement.query(By.css('.title')).nativeElement.textContent;
    expect(elContent).toContain(title);
  });
});
