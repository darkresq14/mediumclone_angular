import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { editArticleActions } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { EditArticleService } from '../services/edit-article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ArticleService as SharedArticalService } from 'src/app/shared/services/article.service';

export const getArticleEffect$ = createEffect(
  (
    actions$ = inject(Actions),
    articleService = inject(SharedArticalService),
  ) => {
    return actions$.pipe(
      ofType(editArticleActions.getArticle),
      switchMap(({ slug }) => {
        return articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return editArticleActions.getArticleSuccess({ article });
          }),
          catchError(() => {
            return of(editArticleActions.getArticleFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const updateArticleEffect$ = createEffect(
  (
    actions$ = inject(Actions),
    editArticleService = inject(EditArticleService),
  ) => {
    return actions$.pipe(
      ofType(editArticleActions.updateArticle),
      switchMap(({ request, slug }) => {
        return editArticleService.updateArticle(request, slug).pipe(
          map((article: ArticleInterface) => {
            return editArticleActions.updateArticleSuccess({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editArticleActions.updateArticleFailure({
                errors: errorResponse.error.errors,
              }),
            );
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const redirectAfterUpdateEffect$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(editArticleActions.updateArticleSuccess),
      tap(({ article }) => {
        router.navigate(['/articles', article.slug]);
      }),
    );
  },
  {
    functional: true,
    dispatch: false,
  },
);
