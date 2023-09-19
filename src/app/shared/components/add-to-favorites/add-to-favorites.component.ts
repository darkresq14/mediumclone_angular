import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToFavoritesActions } from './store/actions';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrentUserInterface } from '../../types/currenUser.interface';
import { filter } from 'rxjs';

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
  currentUser: CurrentUserInterface | null = null;

  constructor(
    private store: Store,
    private router: Router,
  ) {
    this.currentUser$
      .pipe(
        filter(
          (currentUser): currentUser is CurrentUserInterface | null =>
            currentUser !== undefined,
        ),
        takeUntilDestroyed(),
      )
      .subscribe((currentUser) => {
        this.currentUser = currentUser;
      });
  }

  handleLike(): void {
    if (!this.currentUser) {
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
