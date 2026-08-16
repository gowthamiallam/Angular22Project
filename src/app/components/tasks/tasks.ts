import { Component } from '@angular/core';
import { NewTask } from '../new-task/new-task';
import { ShowTask } from '../show-task/show-task';
import { Subjectcomponent } from '../subjectcomponent/subjectcomponent';
import { Comp2 } from '../comp2/comp2';
import { Comp1 } from '../comp1/comp1';
import { ChildComponent } from '../child-component/child-component';
import { ParentComponent } from '../parent-component/parent-component';


// NewTask,ShowTask
//Subjectcomponent
// Comp2,Comp1
// ParentComponent
@Component({
  selector: 'app-tasks',
  imports: [Comp2,Comp1],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  title ="Hello i am  Parent sended data";

  receivedData(){
    alert("Received data from child on click event using event emitter")
  }
}
