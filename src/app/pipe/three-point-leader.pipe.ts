import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threePointLeader',
})
export class ThreePointLeaderPipe implements PipeTransform {
  transform(value: string, count: number): string {
    return value.length > count ? value.slice(0, count) + '...' : value;
  }
}
