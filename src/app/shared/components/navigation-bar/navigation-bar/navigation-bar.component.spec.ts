import { NavigationBarComponent } from './navigation-bar.component';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { Path } from '../../../models/path/path.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavigationBarComponent', () => {

  let fixture: ComponentFixture<NavigationBarComponent>;
  let mockNavigationService;
  let allPaths: Path[] = [];

  beforeEach(() => {
    mockNavigationService = jasmine.createSpyObj([
      'getModulesPaths'
    ]);

    allPaths = [
      { idx: 1, path: 'home', title: 'Home' },
      { idx: 2, path: 'inputs', title: 'Inputs Demonstration' },
      { idx: 3, path: 'masks', title: 'Masks Demonstration' },
      { idx: 4, path: 'modal', title: 'Modal Demonstration' },
      { idx: 5, path: 'selects', title: 'Selects Demonstration' },
      { idx: 6, path: 'tabs', title: 'Tabs Demonstration' },
    ];

    TestBed.configureTestingModule({
      declarations: [
        NavigationBarComponent,
      ],
      providers: [
        { provide: NavigationService, useValue: mockNavigationService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(NavigationBarComponent);
    mockNavigationService.getModulesPaths.and.returnValue(allPaths);
  });

  it('should get data for navigation bar and isReady should be true',  () => {
    fixture.detectChanges();
    const navData = fixture.componentInstance.navData;
    const isReady = fixture.componentInstance.isReady;
    expect(navData).toEqual(allPaths);
    expect(isReady).toBeTrue();
  });

  it('should create all li', () => {
    fixture.detectChanges();
    const liLength: number = fixture.debugElement.queryAll(By.css('li')).length;
    expect(liLength).toBe(allPaths.length);
  });
});
