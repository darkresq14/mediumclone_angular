import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });
  constructor(private store: Store) {}
}
