import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 5px;
  }
  .container{
    display:flex;
    flex-direction: row;
    box-sizing: border-box;
    gap: 40px;
  }
  .container-medium{
    flex-direction: column;
    width:50%;
  }
  .container-field{
    width:100%;
  }
  .container-line{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  @media (max-width: 778px) {
      .container {
        display:flex;
        flex-flow: column ;
      }
      .container-line{
        display: flex;
        flex-direction: column;
      }
      .container-field{
        display: flex;
        flex-direction: column;
        width:100%;
      }
    }
`
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',

  }
  constructor(private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(this.router.url.includes('editar')){
        this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroeService.getHeroesPorId(id) )
      )
      .subscribe( heroe => this.heroe = heroe );
    }
  }

  guardar(){
    if( this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      //actualizar
      this.heroeService.actualizarHeroe( this.heroe)
      .subscribe ( heroe => console.log('Actualizando', heroe));
    }else{
      //Crear
      this.heroeService.agregarHeroe(this.heroe)
      .subscribe( heroe => {
        this.router.navigate(['/heroes/editar', heroe.id])  
      })
    }
  }
  
  borrarHeroe() {
    this.heroeService.borrarHeroe( this.heroe.id! )
      .subscribe( resp => {

      this.router.navigate(['/heroes']);

    });
  }
    
  

}
