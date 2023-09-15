import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-error-messages.component.html',
})
export class BackendErrorMessagesComponent implements OnInit, OnChanges {
  @Input() backendErrors: BackendErrorsInterface = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.setErrorMessages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isBackendErrorsChanged =
      !changes['backendErrors'].firstChange &&
      changes['backendErrors'].currentValue !==
        changes['backendErrors'].previousValue;

    if (isBackendErrorsChanged) {
      this.setErrorMessages();
    }
  }

  setErrorMessages(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');

      return `${name} ${messages}`;
    });
  }
}
