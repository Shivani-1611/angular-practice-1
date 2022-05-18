import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  supVal= '';
  isBtnDisabled = false;

  checkForm() {
    if (this.supVal === 'Shivani') {
      this.isBtnDisabled = true;
    }
  }
  constructor() { 
   
    
  }

  ngOnInit(): void {
  }
  
 

}
