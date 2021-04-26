import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform {

  transform(value: string | undefined | null, ...args: unknown[]): unknown {
    value = value ? value.trim() : '';
    return value ? value.substring(0, 1).toUpperCase().concat(value.substring(1, value.length).toLowerCase()) : '';
  }

}
