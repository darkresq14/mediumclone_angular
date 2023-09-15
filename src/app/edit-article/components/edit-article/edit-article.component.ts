import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormValuesInterface } from 'src/app/shared/components/article-form/types/articleFormValues.interface';
import { ArticleFormComponent } from 'src/app/shared/components/article-form/article-form.component';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, filter, map } from 'rxjs';
import {
  selectIsSubmitting,
  selectValidationErrors,
  selectIsLoading,
  selectArticle,
} from '../../store/reducers';
import { ArticleRequestInterface } from 'src/app/shared/types/articleRequest.interface';
import { editArticleActions } from '../../store/actions';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { ActivatedRoute } from '@angular/router';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [CommonModule, ArticleFormComponent, LoadingComponent],
  templateUrl: './edit-article.component.html',
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleFormValuesInterface> = this.store.pipe(
    select(selectArticle),
    filter((article): article is ArticleInterface => article !== null),
    map((article: ArticleInterface) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      };
    }),
  );

  slug = this.route.snapshot.paramMap.get('slug') ?? '';

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
    isLoading: this.store.select(selectIsLoading),
    article: this.store.select(selectArticle),
    initialValues: this.initialValues$,
  });

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(editArticleActions.getArticle({ slug: this.slug }));
  }

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };

    this.store.dispatch(
      editArticleActions.updateArticle({ request, slug: this.slug }),
    );
  }
}
