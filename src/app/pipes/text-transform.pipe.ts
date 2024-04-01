import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
})
export class TextTransformPipe implements PipeTransform {
  transform(description: string): string {
    if (description.length <= 8) return description;
    return `${description.substring(0, 8)}...`;
  }
}
