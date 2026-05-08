import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-table',
    template: `
    <div class="overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table class="min-w-full text-left text-sm">
        <thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            @for (column of columns(); track column) {
              <th class="px-4 py-3">{{ column }}</th>
            }
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 text-slate-700">
          @for (row of rows(); track $index) {
            <tr>
              @for (column of columns(); track column) {
                <td class="px-4 py-3">{{ formatValue(valueFor(row, column)) }}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
    readonly columns = input<readonly string[]>([]);
    readonly rows = input<readonly object[]>([]);

    valueFor(row: object, column: string): unknown {
        if (column in row) {
            return (row as Record<string, unknown>)[column];
        }

        return undefined;
    }

    formatValue(value: unknown): string {
        if (value === null || value === undefined || value === '') {
            return '-';
        }

        return String(value);
    }
}
