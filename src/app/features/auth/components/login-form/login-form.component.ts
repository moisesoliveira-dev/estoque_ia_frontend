import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../dto/login.dto';

@Component({
    selector: 'app-login-form',
    imports: [ReactiveFormsModule],
    template: `
    <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
      <div class="space-y-1">
        <label for="email" class="text-sm font-medium text-slate-700">Email</label>
        <input
          id="email"
          type="email"
          formControlName="email"
          class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500"
        />
      </div>

      <div class="space-y-1">
        <label for="password" class="text-sm font-medium text-slate-700">Password</label>
        <input
          id="password"
          type="password"
          formControlName="password"
          class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        class="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
      >
        Sign in
      </button>
    </form>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
    private readonly formBuilder = inject(NonNullableFormBuilder);

    readonly submitted = output<LoginDto>();

    protected readonly form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.submitted.emit(this.form.getRawValue());
    }
}
