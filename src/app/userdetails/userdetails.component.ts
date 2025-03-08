import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Transition } from '@uirouter/core';
import { StateService } from '@uirouter/core';
import { User} from '../user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user;
  details:boolean=false;
  profile:boolean=true;
  constructor(private trans:Transition, private state:StateService, private userservice: UserService) { }

  ngOnInit() {

    this.user=this.userservice.getUser();
  }
  show(){ 
    if(this.details==true){
      this.details=false;
      this.profile=true;
    }
    else{
      this.details=true;
      this.profile=false;
    }

  }
}
