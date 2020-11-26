import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue'
  @Input() dStyles!: {
    border?: string
    fontWeight?: string
    borderRadius?: number
  }
  @HostBinding('style.color') elColor: any = null

  constructor(private elRef: ElementRef, private render: Renderer2) {}

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
    // this.render.setStyle(this.elRef.nativeElement, 'color', this.color)
    // this.render.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border)
    // this.render.setStyle(
    //   this.elRef.nativeElement,
    //   'fontWeight',
    //   this.dStyles.fontWeight
    // )
    // this.render.setStyle(
    //   this.elRef.nativeElement,
    //   'borderRadius',
    //   this.dStyles.borderRadius
    // )
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null
    // this.render.setStyle(this.elRef.nativeElement, 'color', null)
    // this.render.setStyle(this.elRef.nativeElement, 'border', null)
    // this.render.setStyle(this.elRef.nativeElement, 'fontWeight', null)
    // this.render.setStyle(this.elRef.nativeElement, 'borderRadius', null)
  }
}
