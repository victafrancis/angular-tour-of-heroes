import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service'; then add 'private messageService: MessageService' inside constructore

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // selectedHero: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   // this.messageService.add(this.selectedHero.name + ' has been selected!');
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // function(heroes){
  //   this.heroes = heroes;
  // }

  constructor(private heroService: HeroService ) { }

  ngOnInit() {
    this.getHeroes();
  }

}

