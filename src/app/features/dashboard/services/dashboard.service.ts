import { Signal, inject, Injectable } from '@angular/core';
import { DashboardMetric, DashboardStore } from '../store/dashboard.store';

@Injectable({ providedIn: 'root' })
export class DashboardService {
    private readonly dashboardStore = inject(DashboardStore);

    listMetrics(): Signal<readonly DashboardMetric[]> {
        return this.dashboardStore.metrics;
    }
}
