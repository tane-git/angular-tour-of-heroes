import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heros';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
