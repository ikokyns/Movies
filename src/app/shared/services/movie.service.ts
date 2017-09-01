import { Injectable } from '@angular/core';
import { Movie } from '../models/movie-model';
import { Examples } from '../examples';
import { Observable, Observer } from 'rxjs';

@Injectable()

export class MovieService {

	private movies: any[] = [];

	public getMovies(){
		for(let i=0; i<Examples.length; i++){
			this.movies.push(new Movie(Examples[i].id, Examples[i].name, Examples[i].director, Examples[i].imageURL, Examples[i].duration, Examples[i].releaseDate, Examples[i].genres));
		};
		//console.log(this.movies);

		return new Observable((o: Observer<any>) => {
      		o.next(this.movies)
    	});
	}
}
