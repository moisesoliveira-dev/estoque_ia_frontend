import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginDto } from '../../dto/login.dto';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-page',
    imports: [LoginFormComponent, RouterLink],
    template: `
    <div class="space-y-4">
      <header>
        <h1 class="text-xl font-semibold text-slate-900">Login</h1>
        <p class="text-sm text-slate-500">Base auth page for template projects.</p>
      </header>

      <app-login-form (submitted)="handleLogin($event)" />

      <p class="text-sm text-slate-500">{{ message() }}</p>

      <a routerLink="/auth/register" class="inline-flex text-sm text-indigo-600 hover:text-indigo-500">
        Create account
      </a>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
    private readonly authService = inject(AuthService);
    private readonly router = inject(Router);

    protected readonly message = signal('Use any valid email and password with at least 6 chars.');

    handleLogin(payload: LoginDto): void {
        this.authService.login(payload).subscribe({
            next: () => {
                this.message.set('Authentication successful. Redirecting...');
                void this.router.navigateByUrl('/dashboard');
            },
            error: () => {
                this.message.set('Authentication failed. Please try again.');
            }
        });
    }
}
