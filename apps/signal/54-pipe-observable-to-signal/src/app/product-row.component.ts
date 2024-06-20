import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { CurrencyService } from './currency.service';
import { Product } from './product.model';

@Component({
  standalone: true,
  selector: 'tr[product-row]',
  template: `
    <td>{{ product().name }}</td>
    <td>{{ product().priceA }}</td>
    <td>{{ product().priceB }}</td>
    <td>{{ product().priceC }}</td>
    <td>{{ priceA() }}</td>
  `,
  imports: [],
  providers: [CurrencyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRowComponent {
  currencyService = inject(CurrencyService);

  product = input.required<Product>();

  priceA = computed(() => this.product().priceA + this.product().currencyCode);
  priceB = computed(() => this.product().priceB + this.product().currencyCode);
  priceC = computed(() => this.product().priceC + this.product().currencyCode);
}
