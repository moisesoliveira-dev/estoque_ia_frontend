import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'emptyValue'
})
export class EmptyValuePipe implements PipeTransform {
    transform(value: string | number | null | undefined, fallback = '-'): string {
        if (value === null || value === undefined || value === '') {
            return fallback;
        }

        return String(value);
    }
}
