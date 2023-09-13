import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  range(start: number, end: number): number[] {
    return [...Array(end - start).keys()].map((el) => el + start);
  }

  range10(currentPage: number, maxPage: number): number[] {
    let start = currentPage - 5;
    let end = currentPage + 5;

    if (start < 1) {
      start = 1;
      end = Math.min(start + 9, maxPage);
    }

    if (end > maxPage) {
      end = maxPage;
      start = Math.max(end - 9, 1);
    }

    return this.range(start, end + 1);
  }
}
