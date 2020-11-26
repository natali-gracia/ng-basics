import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  e: number = Math.E
  str: string = 'Hello world!'
  date: Date = new Date()
  float = 0.42
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        f: 3,
        e: 4,
      },
    },
  }
}
