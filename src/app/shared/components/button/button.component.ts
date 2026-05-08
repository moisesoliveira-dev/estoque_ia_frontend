import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
    <button
      [attr.type]="type()"
      [disabled]="disabled()"
      (click)="clicked.emit()"
      [class]="buttonClasses()"
    >
      {{ label() }}
    </button>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    readonly label = input('Button');
    readonly type = input<'button' | 'submit' | 'reset'>('button');
    readonly variant = input<'primary' | 'secondary'>('primary');
    readonly disabled = input(false);
    readonly clicked = output<void>();

    buttonClasses(): string {
        const baseClasses = 'rounded-md px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60';
        const variantClasses =
            this.variant() === 'primary'
                ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200';

        return `${baseClasses} ${variantClasses}`;
    }
}
