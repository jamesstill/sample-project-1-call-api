import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../models/Joke';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class JokeService {
    
    private url = 'https://official-joke-api.appspot.com/random_joke';
      
    constructor(private httpClient: HttpClient) { }
    
    getJoke(): Observable<Joke> {
      return this.httpClient.get<Joke>(this.url);
    }
    
  }