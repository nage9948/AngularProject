import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user:User;

  constructor() { }
 public setUser(user1:User){
   this.user=user1;
}
   public getUser(){
return this.user;
  }

}
