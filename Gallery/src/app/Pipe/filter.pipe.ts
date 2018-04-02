import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], type: string): any {
    if(type === 'all'){return items} else
      return items.filter(item => {
        return item.type === type;
      });
  }

}
