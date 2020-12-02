import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth: boolean = false

  logIn() {
    this.isAuth = true
  }

  logOut() {
    this.isAuth = false
  }

  isAuthentificated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 1000)
    })
  }
}
