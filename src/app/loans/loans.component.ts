import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  user:any={
  sal:'',
  profession:'',
  ltype:'',
  la:''
  }
  ne:boolean=false;
  e:boolean=false;
  am:boolean=true;
  image:boolean=true;
  constructor() { }

  ngOnInit() {
    
  }
  check(){
    if(this.user.sal>=50000)
    {
      this.e=true;
      this.am=false;
      this.image=false;
    }
    else{
      this.ne=true;
      this.am=false;
    }
  }

}
