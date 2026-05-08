import { Signal, inject, Injectable } from '@angular/core';
import { generateTempId } from '../../../shared/utils/id.util';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../interfaces/user.interface';
import { UsersStore } from '../store/users.store';

@Injectable({ providedIn: 'root' })
export class UsersService {
    private readonly usersStore = inject(UsersStore);

    list(): Signal<readonly User[]> {
        return this.usersStore.users;
    }

    findById(id: string): User | undefined {
        return this.usersStore.users().find((user) => user.id === id);
    }

    create(payload: CreateUserDto): User {
        const user: User = {
            id: generateTempId('user'),
            ...payload
        };

        this.usersStore.add(user);
        return user;
    }

    update(id: string, payload: UpdateUserDto): void {
        this.usersStore.update(id, payload);
    }
}
