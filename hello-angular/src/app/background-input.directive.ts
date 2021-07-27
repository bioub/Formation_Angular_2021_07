import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundInput]'
})
export class BackgroundInputDirective {

  @Input() set appBackgroundInput(value: boolean) {
    this.el.nativeElement.style.backgroundColor = value ? 'red' : 'white';
  };

  constructor(private el: ElementRef<HTMLInputElement>) {
    el.nativeElement.style.backgroundColor = 'white';
  }

}
