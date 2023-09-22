import { ErrorMessageComponent } from './error-message.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render default error state', () => {
    const messageContainer = fixture.nativeElement.querySelector(
      '[data-testid="message-container"]',
    );
    expect(messageContainer.textContent).toEqual('Something went wrong');
  });

  it('should render custom error message', () => {
    component.message = 'Custom error message';
    fixture.detectChanges();

    const messageContainer = fixture.nativeElement.querySelector(
      '[data-testid="message-container"]',
    );
    expect(messageContainer.textContent).toEqual('Custom error message');
  });
});
