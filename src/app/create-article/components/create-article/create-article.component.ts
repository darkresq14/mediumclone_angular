import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormInterface } from 'src/app/shared/components/article-form/types/articleFormValues.interface';
import { ArticleFormComponent } from 'src/app/shared/components/article-form/article-form.component';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [CommonModule, ArticleFormComponent],
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  onSubmit(articleFormValues: ArticleFormInterface): void {
    console.log('onSubmit in create', articleFormValues);
  }
}
