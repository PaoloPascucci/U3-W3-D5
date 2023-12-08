import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: any;

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}
