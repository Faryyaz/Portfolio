import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getInitials'
})

export class GetInitialsPipe implements PipeTransform {
  transform(value: string) {
    return value.replace(/[a-z]/g, '').replace(' ', '');
  }
}