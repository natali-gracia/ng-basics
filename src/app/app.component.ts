import { Component, OnInit } from '@angular/core'

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Create unbelievable Component',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 1,
    },
    {
      title: 'Use best practice in development',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 2,
    },
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      // this.posts[0].title = 'Changed!'
      this.posts[0] = {
        title: 'Changed!',
        text: 'Change text 42',
        id: 42,
      }
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    console.log('Id to remove', id)
    this.posts = this.posts.filter((post) => post.id !== id)
  }
}
