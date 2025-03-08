import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
 showContent:boolean=false;
 r:boolean=true;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>this.showContent=true, 3000);
    setTimeout(()=>this.r=false, 3000);
  }
  ngOnChanges(){
    
    }
  }

  


