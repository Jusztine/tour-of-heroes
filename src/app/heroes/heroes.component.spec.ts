import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../services/hero/hero.service';
import { MessageService } from '../services/message/message.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [RouterModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should fetched all heroes', () => {
  //   const hero = new HeroService(new MessageService());

  //   let result = hero.getHeroes();
  //   expect(result).toBe(result);
  // });
});
