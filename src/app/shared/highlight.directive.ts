import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight: boolean | undefined;
  constructor(private el: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.appHighlight) {
      this.el.nativeElement.style.transition = '300ms';
      this.el.nativeElement.style.color = 'tomato';
    } else {
      this.el.nativeElement.style.color = 'white';

    }
  }


}
