import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit(): void {
  }

}