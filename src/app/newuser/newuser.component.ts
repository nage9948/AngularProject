import { Component, OnInit } from '@angular/core';
import{ User } from  '../user';
import { StateService, Transition } from '@uirouter/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  user:User=new User();
  constructor(private trans: Transition, private state:StateService, private userService:UserService) { }

  ngOnInit() {
    this.userService.setUser(this.user);
  }
  onsubmit(){
   this.state.go('userdetails');
  }
  udetails(){
    this.state.go('userdetails');
  }
}
