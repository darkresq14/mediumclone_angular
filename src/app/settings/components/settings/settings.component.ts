import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { Subscription, combineLatest, filter } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currenUser.interface';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { BackendErrorMessagesComponent } from 'src/app/shared/components/backend-error-messages/backend-error-messages.component';
import { CurrentUserRequestInterface } from 'src/app/shared/types/currentUserRequest.interface';
import { authActions } from 'src/app/auth/store/actions';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, BackendErrorMessagesComponent, ReactiveFormsModule],
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
  form = this.fb.nonNullable.group({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });

  currentUser?: CurrentUserInterface;

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    validationErrors: this.store.select(selectValidationErrors),
  });

  currentUserSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.store
      .pipe(select(selectCurrentUser), filter(Boolean))
      .subscribe((currentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {
    if (!this.currentUser) {
      throw new Error('currentUser is undefined');
    }

    this.form.patchValue({
      image: this.currentUser.image ?? '',
      username: this.currentUser.username,
      bio: this.currentUser.bio ?? '',
      email: this.currentUser.email,
      password: '',
    });
  }

  onSubmit(): void {
    if (!this.currentUser) {
      throw new Error('currentUser is undefined');
    }

    const currentUserRequest: CurrentUserRequestInterface = {
      user: {
        ...this.currentUser,
        ...this.form.getRawValue(),
      },
    };

    this.store.dispatch(authActions.updateCurrentUser({ currentUserRequest }));
  }

  logout(): void {
    this.store.dispatch(authActions.logout());
  }

  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe();
  }
}
