import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateUserDto } from '../../dto/create-user.dto';

@Component({
    selector: 'app-user-form',
    imports: [ReactiveFormsModule],
    template: `
    <form [formGroup]="form" (ngSubmit)="submit()" class="grid gap-3 rounded-lg border border-slate-200 bg-white p-4">
      <input
        type="text"
        formControlName="name"
        placeholder="Name"
        class="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500"
      />
      <input
        type="email"
        formControlName="email"
        placeholder="Email"
        class="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500"
      />
      <select
        formControlName="role"
        class="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500"
      >
        <option value="viewer">Viewer</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
      </select>

      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
      >
        Add user
      </button>
    </form>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
    private readonly formBuilder = inject(NonNullableFormBuilder);

    readonly submitted = output<CreateUserDto>();

    protected readonly form = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        role: this.formBuilder.control<'admin' | 'manager' | 'viewer'>('viewer', Validators.required)
    });

    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.submitted.emit(this.form.getRawValue());
        this.form.reset({
            name: '',
            email: '',
            role: 'viewer'
        });
    }
}
