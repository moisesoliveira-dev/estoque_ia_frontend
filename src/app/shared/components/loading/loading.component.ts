import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
    <div class="flex items-center gap-2 text-sm text-slate-600">
      <span class="inline-block size-3 animate-pulse rounded-full bg-indigo-500"></span>
      <span>{{ message() }}</span>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
    readonly message = input('Loading...');
}
