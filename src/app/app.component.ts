import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice12';
  inputvariable:string="hiii i am your parent";
  constructor()
  {

  }
  getdata(value){
    console.log(value);
  }
}
