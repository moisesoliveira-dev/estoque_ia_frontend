import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-user-details-page',
    imports: [RouterLink],
    template: `
    @if (user(); as selectedUser) {
      <section class="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
        <h1 class="text-xl font-semibold text-slate-900">{{ selectedUser.name }}</h1>
        <p class="text-sm text-slate-600">{{ selectedUser.email }}</p>
        <p class="text-sm text-slate-600">Role: {{ selectedUser.role }}</p>
      </section>
    } @else {
      <p class="text-sm text-slate-600">User not found.</p>
    }

    <a routerLink="/users" class="mt-4 inline-flex text-sm text-indigo-600 hover:text-indigo-500">
      Back to users list
    </a>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsPageComponent {
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly usersService = inject(UsersService);

    protected readonly user = computed(() => {
        const id = this.activatedRoute.snapshot.paramMap.get('id');

        if (!id) {
            return undefined;
        }

        return this.usersService.findById(id);
    });
}
