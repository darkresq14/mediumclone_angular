import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from 'src/app/auth/store/actions';
import { SettingsStateInterface } from '../types/settingsState.interface';
import { routerNavigationAction } from '@ngrx/router-store';

export const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

export const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,
    on(authActions.updateCurrentUser, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.updateCurrentUserSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(authActions.updateCurrentUserFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigationAction, () => initialState),
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectIsSubmitting,
  selectValidationErrors,
} = settingsFeature;
