import { Route } from '@angular/router';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import * as createArticleEffects from './store/effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import {
  createArticleFeatureKey,
  createArticleReducer,
} from './store/reducers';
import { CreateArticleService } from './services/create-article.service';

export const routes: Route[] = [
  {
    path: '',
    component: CreateArticleComponent,
    providers: [
      CreateArticleService,
      provideState(createArticleFeatureKey, createArticleReducer),
      provideEffects(createArticleEffects),
    ],
  },
];
