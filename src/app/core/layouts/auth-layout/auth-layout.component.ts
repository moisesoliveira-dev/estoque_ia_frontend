import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-auth-layout',
    imports: [RouterOutlet],
    template: `
    <div class="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <section class="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <router-outlet />
      </section>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent { }
