import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getFeedResponseInterface } from '../types/getFeedResponse.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<getFeedResponseInterface> {
    const fullUrl = environment.API_URL + url;

    return this.http.get<getFeedResponseInterface>(fullUrl);
  }
}
