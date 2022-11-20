import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/services/hero';
import { MessagesService } from 'src/services/messages';
import { Hero } from '../../entities/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes() //
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
