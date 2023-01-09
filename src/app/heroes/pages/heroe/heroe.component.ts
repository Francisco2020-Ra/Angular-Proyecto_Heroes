import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    .container-medium{
      width:50%;
    }
    .container{
      display:flex;
      flex-flow: row ;
      justify-content:start;
      gap: 30px;
    }

    img{
      width: 100%;
    
      border-radius: 5px;
    }

    @media (max-width: 599px) {
      .container {
        display:flex;
        flex-flow: column ;
        justify-content:start;
        gap: 30px;
      }
    }
  `
  
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(  private activatedRoute: ActivatedRoute,
                private heroesService: HeroesService,
                private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroesPorId(id))
    )
    .subscribe( heroe => this.heroe = heroe );
  }


  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
