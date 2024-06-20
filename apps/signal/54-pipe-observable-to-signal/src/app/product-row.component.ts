import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { currency } from './currency.service';
import { Product } from './product.model';

@Component({
  standalone: true,
  selector: 'tr[product-row]',
  template: `
    <td>{{ product().name }}</td>
    <td>{{ product().priceA }}</td>
    <td>{{ product().priceB }}</td>
    <td>{{ product().priceC }}</td>
    <td>{{ priceWithSymbol() }}</td>
  `,
  imports: [],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRowComponent {
  // you really don't need a CurrencyService or the pipes
  // computed and the currency object should be enough

  product = input.required<Product>();

  // there may be problem using &nbsp; inside signals
  priceA = computed(() => this.product().priceA + this.product().currencyCode);
  priceB = computed(() => this.product().priceB + this.product().currencyCode);
  priceC = computed(() => this.product().priceC + this.product().currencyCode);
  priceWithSymbol = computed(() => this.product().priceC + ' ' + this.symbol());

  symbol = computed(() => {
    const code = this.product().currencyCode;
    return currency.find((c) => c.code === code)?.symbol ?? code;
  });
}
