import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { heroes } from 'src/app/data-heroes';
import { Hero } from 'src/app/interface';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const HEROES = of(heroes);
    this.messageService.add('Hero Service getHeroes: Fetched all heroes');
    return HEROES;
  }

  getHero(id: number): Observable<Hero | undefined> {
    const hero = heroes.find((h) => h.id === id);
    this.messageService.add(`Hero Service: fetched hero id = ${id}`);
    return of(hero);
  }
}
