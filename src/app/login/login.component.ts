import { Component, OnInit } from '@angular/core'; 
import { StateService } from '@uirouter/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  usern:any={
    name:'',
  pwd:''
  }

  pw:boolean=false;
  us:boolean=true;

  constructor(private state:StateService,private service:UserService) { }

  ngOnInit() {
    this.user=this.user;
    
    // this.userService.setUser(this.user);

    
  }
  onSubmit(){
    this.state.go('home',{username:this.usern.name});
    // this.userService.setUser(this.user);
  }
  register(){
    this.state.go('newuser');
  }
  usn(){
    this.pw=true;
    this.us=false;
  }
  pwd(){
    this.state.go('home',{username:this.usern.name});
  }

}
