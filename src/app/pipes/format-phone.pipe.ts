import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: any, numGroup: number): any {
    if (value.length !> 4) {
      return value.substr(0,numGroup) + "-" + value.substr(4,numGroup);
    }
    return value;
  }

}
