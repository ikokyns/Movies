import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../shared/models/movie-model';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html'
})

export class MovieRowComponent implements OnInit {

	@Input() movieRow: Movie;


  constructor() {
  	
  }

  ngOnInit() {
  }

}
