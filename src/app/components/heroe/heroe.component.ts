import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
                private router: Router,
                private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.heroe = this._heroesService.getHeroe( params['id']);
      console.log(this.heroe);
    });
  }

  regresar() {
    this.router.navigate(['/heroes']);
  }

}
