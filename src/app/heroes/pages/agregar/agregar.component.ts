import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
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
  constructor() { }

  ngOnInit(): void {
  }

}
