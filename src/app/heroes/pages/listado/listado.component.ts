import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`

    
    .container{
      display:flex;
      flex-flow: row wrap;
      justify-content:center;
      gap: 20px;
    }
    .card-view{
      width: 15%;
    }
    /** El orden de las media query es de mayor a menor */
    
    /** siempre que este entre 959 y 1280 ejecuta esta instruccion */
    @media (max-width: 1280px) {
      .card-view {
        width: 20%;
      }
    }
    /** siempre que este entre 0 y 959 ejecuta esta instruccion */
    @media (max-width: 959px) {
      .card-view {
        width: 30%;
      }
    }

     /** siempre que este entre 0 y 599 ejecuta esta instruccion */
    @media (max-width: 599px) {
      .container{
        display:flex;
        flex-flow: column;
        align-items: center;
      }
      .card-view{
        width: 50%;
      }
    }

   
   

  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      })
  }

}
