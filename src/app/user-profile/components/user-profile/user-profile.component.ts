import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { userProfileActions } from '../../store/actions';
import { combineLatest, filter, map } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectUserProfileData,
} from '../../store/reducers';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { CurrentUserInterface } from 'src/app/shared/types/currenUser.interface';
import { UserProfileInterface } from '../../types/userProfile.interface';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FeedComponent],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  slug: string = '';

  // isCurrentUserProfile$ = combineLatest({
  //   currentUser: this.store.pipe(
  //     select(selectCurrentUser),
  //     filter((currentUser): currentUser is CurrentUserInterface =>
  //       Boolean(currentUser),
  //     ),
  //   ),
  //   userProfile: this.store.pipe(
  //     select(selectUserProfileData),
  //     filter((userProfile): userProfile is UserProfileInterface =>
  //       Boolean(userProfile),
  //     ),
  //   ),
  // }).pipe(
  //   map(({ currentUser, userProfile }) => {
  //     return currentUser.username === userProfile.username;
  //   }),
  // );

  // data$ = combineLatest({
  //   isLoading: this.store.select(selectIsLoading),
  //   error: this.store.select(selectError),
  //   userProfile: this.store.select(selectUserProfileData),
  //   isCurrentUserProfile: this.isCurrentUserProfile$,
  // });

  isLoading = this.store.selectSignal(selectIsLoading);
  error = this.store.selectSignal(selectError);
  userProfile = this.store.selectSignal(selectUserProfileData);
  currentUser = this.store.selectSignal(selectCurrentUser);
  isCurrentUserProfile = computed(
    () => this.userProfile()?.username === this.currentUser()?.username,
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    this.store.dispatch(userProfileActions.getUserProfile({ slug: this.slug }));
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }
}
