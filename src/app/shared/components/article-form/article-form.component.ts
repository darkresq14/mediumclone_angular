import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormInterface } from './types/articleFormValues.interface';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent {
  @Input() initialValues?: ArticleFormInterface;
  @Input() isSubmitting: boolean = false;
  @Input() errors: BackendErrorsInterface | null = null;

  @Output() articleSubmit = new EventEmitter<ArticleFormInterface>();
}
