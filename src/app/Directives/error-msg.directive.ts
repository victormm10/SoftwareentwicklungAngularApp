import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _message: string  = 'This field is required';
  private _valid  : boolean = true; 
  htmlElement     : ElementRef<HTMLElement>;

  @Input() set message( valor: string ){
    this._message = valor;
    this.setMessage();
  }

  @Input() set valid( valor: string ){
    this._valid = valor ? false : true;
    this.setValid();
  }

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setMessage();
    this.setValid();
  }

  setMessage(){
    if(this._message)
      this.htmlElement.nativeElement.innerText = this._message;
    else
      this.htmlElement.nativeElement.innerText = '';
  }

  setValid(){
    if(!this._valid)
      this.htmlElement.nativeElement.classList.add('is-invalid');
    else
      this.htmlElement.nativeElement.classList.remove('is-invalid');
  }

}
