import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  template: `
        <div class="flex h-screen overflow-hidden">
            <app-sidebar />
            <div class="flex flex-1 flex-col overflow-hidden">
                <app-topbar />
                <main class="flex-1 overflow-auto">
                    <router-outlet />
                </main>
            </div>
        </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent { }
