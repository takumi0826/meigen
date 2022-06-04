import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryType',
})
export class CategoryTypePipe implements PipeTransform {
  transform(values: string[]): string {
    return values.join('・') || 'その他';
  }
}
