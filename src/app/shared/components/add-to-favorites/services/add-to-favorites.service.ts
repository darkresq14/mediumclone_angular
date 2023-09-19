import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleResponseInterface } from 'src/app/shared/types/articleResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  getUrl(slug: string): string {
    return `${environment.API_URL}/articles/${slug}/favorite`;
  }

  getArticle(response: ArticleResponseInterface): ArticleInterface {
    return response.article;
  }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);

    return this.http
      .post<ArticleResponseInterface>(url, {})
      .pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);

    return this.http
      .delete<ArticleResponseInterface>(url)
      .pipe(map(this.getArticle));
  }
}
