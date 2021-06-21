import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators'

import {ActivatedRoute} from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private heroeService: HeroesService) { }

  heroe!: Heroe;

  ngOnInit(): void {

    let id: string = '';
    this.route.params.pipe(
      switchMap( ({id}) => this.heroeService.getHeroe(id))
    )
    .subscribe(heroe => this.heroe = heroe);

    

  }

}
