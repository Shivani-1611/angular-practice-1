import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName="Shivani";
  title = 'practice1';
  imagePath="./assets/img-1.jpg";
  lastName:string="Sharma";

  passValueToFunc(e:any)
    {
      console.log(e.target.value);
    }
  newVal= "Hello";
  passVal(e:any){
    console.log(e.target.value);
  }
  defaultVal="New";

  isApproved = false;
  numbers:any= [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
  ];
  luckyNumber=0;
  approve(status:any){
    this.isApproved=status;

  }

  
}
