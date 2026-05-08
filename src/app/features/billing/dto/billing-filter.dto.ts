export interface BillingFilterDto {
    status?: 'pending' | 'paid';
    dueDateFrom?: string;
    dueDateTo?: string;
}
