import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() myinput:string;
@Output() myoutput:EventEmitter<string>=new EventEmitter();
outputstring="hi i am your child";
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.myinput);
  }
  senddata(){
    this.myoutput.emit(this.outputstring);
  }

}
