import { inject, Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  currencyService = inject(CurrencyService);

  transform(price: number): Observable<string> {
    return this.currencyService.symbol$.pipe(map((s) => `${price}${s}`));
  }
}

// perform this inside an effect or computed function
