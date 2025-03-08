import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
//import { UserService } from '@uirouter/core';
import { Transition } from '@uirouter/core';
import { User} from '../user';



@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
  user;
    username:string='';
  constructor(private trans: Transition,private state:StateService,) { }

  ngOnInit() {

  }

}
