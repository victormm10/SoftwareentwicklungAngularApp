import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[grid-stripped-color]'
})

export class GridColorDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  private _color: string = '#d3fbfd';
  private _rownum: number = 0;

  @Input() set rownum( valor: number){
    this._rownum = valor;
    this.setColor();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
   }

   ngOnInit(): void {
    this.setColor();
  }

   setColor(): void{
     if(!(this._rownum % 2))
        this.htmlElement.nativeElement.style.backgroundColor = this._color;    
  }

}
