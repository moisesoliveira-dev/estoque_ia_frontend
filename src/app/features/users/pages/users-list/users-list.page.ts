import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-users-list-page',
    imports: [UserCardComponent, UserFormComponent],
    template: `
    <section class="space-y-6">
      <header>
        <h1 class="text-2xl font-semibold text-slate-900">Users</h1>
        <p class="text-sm text-slate-500">Generic users module to extend in future projects.</p>
      </header>

      <app-user-form (submitted)="createUser($event)" />

      <div class="grid gap-3 md:grid-cols-2">
        @for (user of users(); track user.id) {
          <app-user-card [user]="user" />
        }
      </div>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListPageComponent {
    private readonly usersService = inject(UsersService);

    protected readonly users = this.usersService.list();

    createUser(payload: CreateUserDto): void {
        this.usersService.create(payload);
    }
}
