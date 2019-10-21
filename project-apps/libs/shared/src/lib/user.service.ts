import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any;

  get() {
    return this.user;
  }

  set(user) {
    this.user = user;
  }
}
