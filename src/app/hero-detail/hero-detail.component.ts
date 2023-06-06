import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('heroId'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    console.log(id);
  }

  goBack(): void {
    this.location.back();
  }
}
