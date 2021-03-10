import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangebg]'
})
export class ChangebgDirective implements OnInit {

  private elementSelected = false;
  @Input() value: string ="";

  constructor(private eleRef: ElementRef) { }
  
  ngOnInit() {
    // console.log("value:", this.value);
}
   
  @HostListener('click')
  
    
  private onClick() { 
    if (this.value === "submit") {
      this.eleRef.nativeElement.style.background = 'green';
    } 
    else if (this.value === "reset") {
      this.eleRef.nativeElement.style.background = 'red';
    } 
    else {
      this.eleRef.nativeElement.style.background = '#f2f2f2';
    }
  }
   
 
}
