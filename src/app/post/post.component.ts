import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core'
import { Post } from '../app.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {
  @Input() post!: Post
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>()
  @ContentChild('info', { static: true }) infoRef!: ElementRef

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
    // console.log(this.infoRef.nativeElement)
  }

  ngOnInit() {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }
}
