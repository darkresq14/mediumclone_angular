import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() total: number = 0;
  @Input() limit: number = 0;
  @Input() url: string = '';
  @Input() currentPage: number = 1;

  pagesCount: number = 1;
  pages: number[] = [];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages =
      this.pagesCount > 0
        ? this.utilsService.range10(this.currentPage, this.pagesCount)
        : [];
  }
}
