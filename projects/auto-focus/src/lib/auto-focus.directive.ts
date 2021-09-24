import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[ngxAutoFocus]' })
export class AutoFocusDirective implements OnInit {
  private autofocus: boolean;

  @Input() public set ngxAutoFocus(condition: boolean) {
    this.autofocus = condition !== false;
  }

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    if (this.autofocus) {
      this.el.nativeElement.focus();
    }
  }
}
