import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { BillingSummaryComponent } from '../../components/billing-summary/billing-summary.component';
import { BillingService } from '../../services/billing.service';

@Component({
    selector: 'app-billing-home-page',
    imports: [BillingSummaryComponent, TableComponent],
    template: `
    <section class="space-y-4">
      <header>
        <h1 class="text-2xl font-semibold text-slate-900">Billing</h1>
        <p class="text-sm text-slate-500">Reusable billing scaffold with basic summary and table.</p>
      </header>

      <app-billing-summary [items]="items()" />

      <app-table [columns]="columns" [rows]="tableRows()" />
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingHomePageComponent {
    private readonly billingService = inject(BillingService);

    protected readonly columns = ['id', 'description', 'amount', 'dueDate', 'status'] as const;
    protected readonly items = this.billingService.list();

    protected readonly tableRows = this.items;
}
