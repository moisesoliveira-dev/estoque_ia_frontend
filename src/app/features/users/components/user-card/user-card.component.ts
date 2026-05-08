import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
    selector: 'app-user-card',
    imports: [RouterLink],
    template: `
    <article class="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 class="text-base font-semibold text-slate-900">{{ user().name }}</h3>
      <p class="text-sm text-slate-500">{{ user().email }}</p>
      <p class="mt-2 text-xs uppercase tracking-wide text-slate-500">Role: {{ user().role }}</p>

      <a
        [routerLink]="['/users', user().id]"
        class="mt-3 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >
        View details
      </a>
    </article>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
    readonly user = input.required<User>();
}
