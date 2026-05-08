import { computed, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';

const INITIAL_USERS: readonly User[] = [
    {
        id: 'u-1',
        name: 'Template Admin',
        email: 'admin@template.local',
        role: 'admin'
    },
    {
        id: 'u-2',
        name: 'Template Manager',
        email: 'manager@template.local',
        role: 'manager'
    }
];

@Injectable({ providedIn: 'root' })
export class UsersStore {
    private readonly usersState = signal<readonly User[]>(INITIAL_USERS);

    readonly users = this.usersState.asReadonly();
    readonly total = computed(() => this.usersState().length);

    add(user: User): void {
        this.usersState.update((current) => [...current, user]);
    }

    update(id: string, changes: Partial<User>): void {
        this.usersState.update((current) =>
            current.map((user) => (user.id === id ? { ...user, ...changes } : user))
        );
    }
}
