import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddToFavoritesService } from '../services/add-to-favorites.service';
import { switchMap, map, catchError, of } from 'rxjs';
import { addToFavoritesActions } from './actions';

export const getFeedEffect$ = createEffect(
  (
    actions$ = inject(Actions),
    addToFavoritesService = inject(AddToFavoritesService),
  ) => {
    return actions$.pipe(
      ofType(addToFavoritesActions.addToFavorites),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? addToFavoritesService.removeFromFavorites(slug)
          : addToFavoritesService.addToFavorites(slug);

        return article$.pipe(
          map((article) => {
            return addToFavoritesActions.addToFavoritesSuccess({ article });
          }),
          catchError(() => {
            return of(addToFavoritesActions.addToFavoritesFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);
