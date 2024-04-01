import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueTransform',
})
export class ValueTransformPipe implements PipeTransform {
  transform(value: number): string {
    const decimalValue = value.toFixed(2);
    return `R$ ${decimalValue.toString().replace('.', ',')}`;
  }
}
