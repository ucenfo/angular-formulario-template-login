import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  /**
   * Método que recibe un valor y toma desde el primer elemento (0), y considera el largo (length?:number)
   * @param value 
   * @returns 
   */
  transform(value: any): any {
    return value.substr(0,10);
  }

}
