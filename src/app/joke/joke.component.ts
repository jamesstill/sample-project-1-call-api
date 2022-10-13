import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/Joke';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  joke: Joke = {} as Joke;

  constructor(private service: JokeService) { }

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke() {
    this.joke = {} as Joke;
    
    this.service.getJoke().subscribe((r) => this.joke = r);
  }

}
