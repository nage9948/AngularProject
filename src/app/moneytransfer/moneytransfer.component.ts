import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moneytransfer',
  templateUrl: './moneytransfer.component.html',
  styleUrls: ['./moneytransfer.component.css']
})
export class MoneytransferComponent implements OnInit {
  balance: number=120000;
   transaction:boolean=false;
   rec:boolean=false;
   fo:boolean=true;
   sear:boolean=true;
   but:boolean=false;
   date:Date=new Date();
   num:string;
  //  var randomstring = require("randomstring");
  //  randomstring.generate();
  // var randomString = require('random-string');
  // var x = randomString();

   b:any={
    name:'',
  amount:'',
  ifsc:'',
  branch:'',
  mnum:'',
  acctnum:''
  }
  constructor() { }

  ngOnInit() {
    this.num= Math.random().toString(20).substring(2, 9).toUpperCase() + Math.random().toString(20).substring(2, 9).toUpperCase();
    
  }
    transfer(){
      this.transaction=true;
      this.balance=this.balance-this.b.amount;
      
    }
    receipt(){
      this.transaction=false;
      this.rec=true;
      this.fo=false;
      this.sear=false;
      this.but=true;
    }
}
 