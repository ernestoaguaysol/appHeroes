import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-res',
  templateUrl: './heroes-res.component.html',
  styles: []
})
export class HeroesResComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log(this.heroes);
    });
  }

}
