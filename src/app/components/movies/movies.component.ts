import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie';
import { FavoritesService } from 'src/app/services/favorites.service';
import { UserService } from 'src/app/services/user-service.service';
import { Favourite } from 'src/app/models/favourite';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  user: any;
  favorites: Favourite[] = [];
  constructor(
    private movieSrv: MoviesService,
    private favSrv: FavoritesService,
    private userSrv: UserService
  ) {}

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe(
      (movies) => {
        //console.log(movies);
        this.movies = movies;
        //console.log(this.movies);
      },
      (error) => {
        console.error('Errore nella get dei film', error);
      }
    );
    this.user = this.userSrv.getCurrentUser();
    console.log(this.user);
    
  }
  addF(uId: number, mId: number) {
    return this.favSrv.addFavorite(uId, mId).subscribe((newFav)=> {
      this.favorites.push(newFav);
    });
  }
}
