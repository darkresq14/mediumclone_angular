import { Route } from '@angular/router';
import * as editArticleEffects from './store/effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { editArticleFeatureKey, editArticleReducer } from './store/reducers';
import { EditArticleService } from './services/edit-article.service';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

export const routes: Route[] = [
  {
    path: '',
    component: EditArticleComponent,
    providers: [
      EditArticleService,
      provideState(editArticleFeatureKey, editArticleReducer),
      provideEffects(editArticleEffects),
    ],
  },
];
