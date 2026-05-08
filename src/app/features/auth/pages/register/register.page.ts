import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register-page',
    imports: [RouterLink],
    template: `
    <div class="space-y-4">
      <h1 class="text-xl font-semibold text-slate-900">Register</h1>
      <p class="text-sm text-slate-600">
        This page is intentionally generic so each project can define its own sign-up flow.
      </p>

      <a routerLink="/auth/login" class="inline-flex text-sm text-indigo-600 hover:text-indigo-500">
        Back to login
      </a>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent { }
