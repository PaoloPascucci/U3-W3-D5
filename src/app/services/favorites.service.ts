import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favourite } from '../models/favourite';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private api = environment.apiURL;

  constructor(private http: HttpClient) {}

  getFavorites(userId: number): Observable<Favourite[]> {
    return this.http.get<Favourite[]>(
      `${this.api}/favorites?userId=${userId}`
    );
  }

  addFavorite(userId: number, movieId: number): Observable<Favourite> {
    const newFavorite: Favourite = { userId, movieId };
    console.log(newFavorite);
    return this.http.post<Favourite>(`${this.api}/favorites`, newFavorite);
  }

  removeFavorite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/favorites/${id}`);
  }
}
