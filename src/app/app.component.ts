import { Component } from '@angular/core'

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search = ''
  searchField = 'title'
  posts: Post[] = [
    { title: 'Beer', text: 'Best beer ever!' },
    { title: 'Bread', text: 'The worth bread in the world!' },
    { title: 'Angular', text: 'The most interesting framework ever!' },
  ]
  addPost() {
    this.posts.unshift({
      title: 'Angular EDU',
      text: 'Angular course'
    })
  }
}
