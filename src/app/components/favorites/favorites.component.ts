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
  films: any[] = [];
  constructor(
    private favSrv: FavoritesService,
    private userSrv: UserService,
    private mSrv: MoviesService
  ) {}
  ngOnInit(): void {
    this.user = this.userSrv.getCurrentUser();
    console.log(this.user);

    this.mSrv.getMovies().subscribe(
      (movies) => {
        this.films = movies;
      },
      (error) => {
        console.error('Errore nella get dei film', error);
      }
    );
    this.favSrv.getFavorites(this.user.user.id).subscribe(
      (fav) => {
        this.favorites = fav;
        console.log(this.favorites);

        this.films = this.films.filter((film: { id: number }) =>
          this.favorites.some((key) => key.movieId === film.id)
        );
      },
      (error) => {
        console.error('Errore nella get dei film', error);
      }
    );
  }
  removeFavorite(id: number) {
    let fToRemove:any;

    for (const favorite of this.favorites) {
      if (favorite.movieId === id) {
        fToRemove = favorite;
        break; 
      }
    }
    console.log(this.films);
    
    console.log(id);
    console.log(fToRemove);

if (fToRemove) {
    this.favSrv.removeFavorite(fToRemove.id).subscribe(
      () => {
        this.favorites = this.favorites.filter((favorite) => favorite !== fToRemove);
        alert(`Favorito rimosso con successo`);
      },
      (error) => {
        console.error('Errore durante la rimozione del favorito', error);
      }
    );
  } else {
    console.warn('Favorito non trovato con movieId:', id);
  }
}
}
