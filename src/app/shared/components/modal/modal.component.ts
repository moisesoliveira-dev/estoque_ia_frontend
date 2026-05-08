import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
    selector: 'app-modal',
    template: `
    @if (open()) {
      <div class="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4">
        <div class="w-full max-w-lg rounded-lg bg-white p-5 shadow-lg">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-base font-semibold text-slate-900">{{ title() }}</h2>
            <button
              type="button"
              class="rounded px-2 py-1 text-slate-600 transition hover:bg-slate-100"
              (click)="closed.emit()"
            >
              X
            </button>
          </div>

          <ng-content />
        </div>
      </div>
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
    readonly open = input(false);
    readonly title = input('Modal');
    readonly closed = output<void>();
}
