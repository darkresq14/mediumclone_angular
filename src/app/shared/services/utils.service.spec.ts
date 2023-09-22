import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let utilsService: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService],
    }).compileComponents();

    utilsService = TestBed.inject(UtilsService);
  });

  it('should create service', () => {
    expect(utilsService).toBeTruthy();
  });

  describe('range', () => {
    it.each([
      [1, 5, [1, 2, 3, 4, 5]],
      [6, 10, [6, 7, 8, 9, 10]],
    ])(
      'should generate a range of numbers between %i and %i',
      (start, end, expected) => {
        const result = utilsService.range(start, end);
        expect(result).toEqual(expected);
      },
    );
  });

  describe('range10', () => {
    it.each([
      [2, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      [12, 15, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
      [10, 20, [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
    ])(
      `should generate a range of numbers centered around page %i with a max of %i. 10 numbers on edge case else 5 left 5 right, for a total of 11 numbers`,
      (page, maxPage, res) => {
        const result = utilsService.range10(page, maxPage);
        expect(result).toEqual(res);
      },
    );
  });
});
