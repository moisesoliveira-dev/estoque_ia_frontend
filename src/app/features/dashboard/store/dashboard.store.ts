import { Injectable, signal } from '@angular/core';

export interface DashboardMetric {
    label: string;
    value: string;
}

const INITIAL_METRICS: readonly DashboardMetric[] = [
    { label: 'New users', value: '12' },
    { label: 'Active sessions', value: '34' },
    { label: 'Conversion rate', value: '4.1%' }
];

@Injectable({ providedIn: 'root' })
export class DashboardStore {
    private readonly metricsState = signal<readonly DashboardMetric[]>(INITIAL_METRICS);

    readonly metrics = this.metricsState.asReadonly();
}
