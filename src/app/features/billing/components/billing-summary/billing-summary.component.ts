import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BillingItem } from '../../interfaces/billing-item.interface';

@Component({
    selector: 'app-billing-summary',
    template: `
    <article class="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p class="text-sm text-slate-500">Total billed items</p>
      <p class="mt-1 text-2xl font-semibold text-slate-900">{{ items().length }}</p>
      <p class="mt-3 text-sm text-slate-600">Total amount: {{ totalAmount() }}</p>
    </article>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingSummaryComponent {
    readonly items = input<readonly BillingItem[]>([]);

    protected readonly totalAmount = computed(() =>
        this.items().reduce((amount, item) => amount + item.amount, 0)
    );
}
