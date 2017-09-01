import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  private movies: any = [];

  ngOnInit() {
  	this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

}
