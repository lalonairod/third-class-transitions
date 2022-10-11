import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPlusSize]'
})
export class PlusSizeDirective implements OnInit{

  @Input ('size') size : string = '';

  @HostListener('click') plusFont(){
    this.element.nativeElement.style.fontSize = this.size;
  }

  constructor(private element : ElementRef) { }
  ngOnInit(): void {
    this.element.nativeElement.style.fontSize = this.size;
  }

}
