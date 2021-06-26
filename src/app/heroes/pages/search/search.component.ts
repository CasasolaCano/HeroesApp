import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: string = "";
  heroes: Heroe[] = [];

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }


  search() {

    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

}
