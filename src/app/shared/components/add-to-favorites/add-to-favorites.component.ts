import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToFavoritesActions } from './store/actions';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-add-to-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-favorites.component.html',
})
export class AddToFavoritesComponent {
  @Input() isFavorited: boolean = false;
  @Input() favoritesCount: number = 0;
  @Input() articleSlug: string = '';

  currentUser$ = this.store.select(selectCurrentUser);
  userSignal = toSignal(this.currentUser$);

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  handleLike(): void {
    if (!this.userSignal()) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.store.dispatch(
      addToFavoritesActions.addToFavorites({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      }),
    );

    if (this.isFavorited) {
      this.favoritesCount--;
    } else {
      this.favoritesCount++;
    }

    this.isFavorited = !this.isFavorited;
  }
}
