import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-layout',
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    template: `
    <div class="min-h-screen bg-slate-50 text-slate-900">
      <header class="border-b border-slate-200 bg-white">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span class="text-sm font-semibold tracking-wide">Template Angular</span>
          <nav class="flex items-center gap-2 text-sm">
            <a
              routerLink="/dashboard"
              routerLinkActive="font-semibold text-indigo-600"
              class="rounded px-2 py-1 transition hover:bg-slate-100"
            >
              Dashboard
            </a>
            <a
              routerLink="/users"
              routerLinkActive="font-semibold text-indigo-600"
              class="rounded px-2 py-1 transition hover:bg-slate-100"
            >
              Users
            </a>
            <a
              routerLink="/billing"
              routerLinkActive="font-semibold text-indigo-600"
              class="rounded px-2 py-1 transition hover:bg-slate-100"
            >
              Billing
            </a>
          </nav>
        </div>
      </header>

      <main class="mx-auto w-full max-w-6xl px-4 py-6">
        <router-outlet />
      </main>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent { }
