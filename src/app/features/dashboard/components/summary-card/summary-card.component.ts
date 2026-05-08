import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DashboardMetric } from '../../store/dashboard.store';

@Component({
    selector: 'app-summary-card',
    template: `
    <article class="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p class="text-sm text-slate-500">{{ metric().label }}</p>
      <p class="mt-1 text-2xl font-semibold text-slate-900">{{ metric().value }}</p>
    </article>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryCardComponent {
    readonly metric = input.required<DashboardMetric>();
}
