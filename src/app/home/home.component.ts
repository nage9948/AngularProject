import { Component, OnInit } from '@angular/core';
import { Transition } from '@uirouter/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string='';

  constructor(private trans: Transition, private state: StateService) { }

  ngOnInit() {
    this.username=this.trans.params().username;
  }

  // onSubmit(){
  //   this.state.go('home',{username:this.username});
  // }

}
