import { Signal, inject, Injectable } from '@angular/core';
import { BillingFilterDto } from '../dto/billing-filter.dto';
import { BillingItem } from '../interfaces/billing-item.interface';
import { BillingStore } from '../store/billing.store';

@Injectable({ providedIn: 'root' })
export class BillingService {
    private readonly billingStore = inject(BillingStore);

    list(_filter?: BillingFilterDto): Signal<readonly BillingItem[]> {
        return this.billingStore.items;
    }
}
