import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post, PostsService } from './posts.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Post> | Promise<Post> | Post {
    return of(this.postsService.getById(+route.params['id'])).pipe(delay(1500));
  }
}
