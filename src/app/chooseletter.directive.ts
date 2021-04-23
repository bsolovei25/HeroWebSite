import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChooseletter]'
})
export class ChooseletterDirective {

  color = '';
  constructor(public el: ElementRef) {
    //el.nativeElement.style.color = 'pink';
  }
  @Input() appHighlight!: string;

  @HostListener('click') onMouseClick() {
    console.log(this.el.nativeElement.innerHTML);
    console.log(this.appHighlight);
  }


}
