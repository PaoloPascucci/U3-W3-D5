import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private api = environment.apiURL
  constructor(private http:HttpClient) { }
  
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.api}/movies-popular`);
  }
}
