import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Favourite } from 'src/app/models/favourite';
import { UserService } from 'src/app/services/user-service.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  user: any;
  favorites: Favourite[] = [];
  movies: any = [];
  constructor(
    private favSrv: FavoritesService,
    private userSrv: UserService,
    private mSrv: MoviesService
  ) {}
  ngOnInit(): void {
    this.user = this.userSrv.getCurrentUser();
    console.log(this.user);

    this.movies = this.mSrv.getMovies().subscribe(
      (movies) => {        
        this.movies = movies;        
      },
      (error) => {
        console.error('Errore nella get dei film', error);
      }
    );
    this.favSrv.getFavorites(this.user.id).subscribe(
      (fav) => {
        this.favorites = fav;
        this.movies = this.movies.filter((movie: { id: number }) =>
          this.favorites.some((favorite) => favorite.movieId === movie.id)
        );
      },
      (error) => {
        console.error('Errore nella get dei film', error);
      }
    );
    console.log(this.favorites);
  }
  removeFavorite(id: number) {
    return this.favSrv.removeFavorite(id);
  }
}
