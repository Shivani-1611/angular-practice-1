import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  iptTxt="";
  mkeBtnDisabled= false;

  doChk(){
  if(this.iptTxt === "Sharma"){
    this.mkeBtnDisabled = true;
  }
}
  constructor() { }

  ngOnInit(): void {
  }
  
}
