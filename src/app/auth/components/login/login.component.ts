import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BackendErrorMessagesComponent } from 'src/app/shared/components/backend-error-messages/backend-error-messages.component';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { authActions } from '../../store/actions';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    BackendErrorMessagesComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  onSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.login({ request }));
  }
}
