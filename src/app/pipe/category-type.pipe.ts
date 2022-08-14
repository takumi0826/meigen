import { Pipe, PipeTransform } from '@angular/core';
import { LegendCategory } from '../types/type';

@Pipe({
  name: 'categoryType',
})
export class CategoryTypePipe implements PipeTransform {
  transform(values: LegendCategory[]): string {
    const names = values.map((v) => v.child.name);
    return names.join('・') || 'その他';
  }
}
