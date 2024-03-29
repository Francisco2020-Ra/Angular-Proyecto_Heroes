import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialref: MatDialogRef<ConfirmarComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
    
  }

  borrar(){

    this.dialref.close(true);

  }

  cerrar(){
    this.dialref.close();
  }

}
