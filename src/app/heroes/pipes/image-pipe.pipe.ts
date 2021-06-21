import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  transform(value:Heroe ):string {

    const path:string = `assets/heroes/${value.id}.jpg`;
    return path;
  }

}
