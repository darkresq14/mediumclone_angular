import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `<div>{{ message }}</div>`,
})
export class ErrorMessageComponent {
  @Input() message: string = 'Something went wrong';
}
