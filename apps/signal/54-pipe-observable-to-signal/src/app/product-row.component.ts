import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyService } from './currency.service';
import { Product } from './product.model';

@Component({
  standalone: true,
  selector: 'tr[product-row]',
  template: `
    <td>{{ product().name }}</td>
    <td>{{ (product().priceA | currency)() }}</td>
    <td>{{ (product().priceB | currency)() }}</td>
    <td>{{ (product().priceC | currency)() }}</td>
  `,
  imports: [CurrencyPipe],
  providers: [CurrencyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRowComponent {
  product = input.required<Product>();
  currencyService = inject(CurrencyService);

  constructor() {
    effect(() => {
      untracked(() =>
        this.currencyService.updateCode(this.product().currencyCode),
      );
    });
  }
}
