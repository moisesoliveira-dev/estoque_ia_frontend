export interface BillingItem {
    id: string;
    description: string;
    amount: number;
    dueDate: string;
    status: 'pending' | 'paid';
}
