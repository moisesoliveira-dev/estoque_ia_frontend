import { Injectable, signal } from '@angular/core';
import { BillingItem } from '../interfaces/billing-item.interface';

const INITIAL_ITEMS: readonly BillingItem[] = [
    {
        id: 'inv-001',
        description: 'Starter plan',
        amount: 99,
        dueDate: '2026-05-15',
        status: 'pending'
    },
    {
        id: 'inv-002',
        description: 'Consulting package',
        amount: 450,
        dueDate: '2026-05-01',
        status: 'paid'
    }
];

@Injectable({ providedIn: 'root' })
export class BillingStore {
    private readonly itemsState = signal<readonly BillingItem[]>(INITIAL_ITEMS);

    readonly items = this.itemsState.asReadonly();
}
