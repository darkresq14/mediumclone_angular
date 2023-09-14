import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagType } from '../../types/popularTag.type';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() tags: PopularTagType[] = [];
}
