import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: '[appAutofocus]'
})
export class AutofocusDirective {
    private readonly elementRef = inject(ElementRef<HTMLElement>);

    constructor() {
        afterNextRender(() => {
            this.elementRef.nativeElement.focus();
        });
    }
}
