import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SummaryCardComponent } from '../../components/summary-card/summary-card.component';
import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'app-dashboard-home-page',
    imports: [SummaryCardComponent],
    template: `
    <section class="space-y-4">
      <header>
        <h1 class="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p class="text-sm text-slate-500">Generic overview page for reusable Angular projects.</p>
      </header>

      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        @for (metric of metrics(); track metric.label) {
          <app-summary-card [metric]="metric" />
        }
      </div>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHomePageComponent {
    private readonly dashboardService = inject(DashboardService);

    protected readonly metrics = this.dashboardService.listMetrics();
}
