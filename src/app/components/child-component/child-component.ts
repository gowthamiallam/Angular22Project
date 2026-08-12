import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {

  @Input() childdata: string;
  @Output() childbtndata = new EventEmitter();

  sendData() {
    this.childbtndata.emit('hello i am child sended the data ')
  }

  childMethods(){
    alert("child component accessible from parent using view child ")
  }
}
