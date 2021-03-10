import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preZeros'
})
export class PreZerosPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    if(value.length <1)
    {
      console.log(value);
       return '00'+value;
    }

    if(value.length <2)
    {
     console.log(value);
     return '0'+value; 
    }

    else
    return value;
  }

}
