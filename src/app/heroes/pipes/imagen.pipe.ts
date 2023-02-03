import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
    name: 'imagen'
})
export class ImagenPipe implements PipeTransform{
    transform(heroeDeListado: Heroe): string {
        if(!heroeDeListado.id && !heroeDeListado.alt_img){
            return `assets/no-image.png`;
        }else if( heroeDeListado.alt_img){
            return heroeDeListado.alt_img;
        }else{
            return `assets/heroes/${ heroeDeListado.id }.jpg`;
        }
    }    
}