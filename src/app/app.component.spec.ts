import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header/header.component';
import { NavigationBarComponent } from './shared/components/navigation-bar/navigation-bar/navigation-bar.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        NavigationBarComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should get headerTitle', () => {
    const title = fixture.componentInstance['headerTitle'] = 'This is test header title';
    fixture.detectChanges();
    const result = fixture.componentInstance.getHeaderTitle();
    expect(result).toContain(title);
  });

  it('should set headerTitle', () => {
    const newTitle: string = 'New test title!';
    fixture.detectChanges();
    fixture.componentInstance.setHeaderTitle(newTitle);
    const resTitle = fixture.componentInstance['headerTitle'];
    expect(resTitle).toContain(newTitle);
  });


});
