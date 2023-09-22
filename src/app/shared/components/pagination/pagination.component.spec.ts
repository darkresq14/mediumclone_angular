import { PaginationComponent } from './pagination.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilsService } from '../../services/utils.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let mockUtilsService = {
    range10: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: UtilsService,
          useValue: mockUtilsService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;

    component.total = 110;
    component.limit = 10;
    component.currentPage = 2;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should compute pagesCount and pages correctly', () => {
    expect(component.pagesCount).toBe(11);
    expect(component.pages).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should render correct number of pages', () => {
    const pageItems = fixture.debugElement.queryAll(By.css('.page-item'));
    // Two for "First" and "Last", 10 for individual pages
    expect(pageItems.length).toBe(12);
  });

  it('should apply active and disabled classes correctly', () => {
    const pageItems = fixture.debugElement.queryAll(By.css('.page-item'));
    expect(pageItems[0].classes['disabled']).toBeFalsy();
    expect(pageItems[2].classes['active']).toBeTruthy();
    expect(pageItems[3].classes['active']).toBeFalsy();
    expect(pageItems[11].classes['disabled']).toBeFalsy();
  });
});
