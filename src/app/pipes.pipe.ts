import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if  (value=='M')
      {
 return "masculino";
      }
    else{
      return "Señorita";
    }
    }

}
