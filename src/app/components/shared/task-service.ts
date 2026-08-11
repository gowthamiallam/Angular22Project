import { EventEmitter, Service } from '@angular/core';
import { Subject } from 'rxjs';

@Service()
export class TaskService {

    //Creating an event emitter to emit the string value 
    // createTask: EventEmitter<string> = new EventEmitter<string>();
    //This event must be raised when something happens

    //Create a subject 
    createTask = new Subject<string>();  //what type of data that subject that special type of observable is going to emit

    //To raise this event call another method
    onCreateTaskMethod(val: string) {
        // this.createTask.emit(val);   // use when using event  line 8
        this.createTask.next(val);     //use when using subject (here using next method to emit value from subject )
    }

    //we are able to pass data from 1 component (new-task) to another component (show-task) using services and eventemitter seven though they are not related not parent child 
    //The same thing we can achieve with subject also. we can  pass data from 1 component (new-task) to another component (show-task) 
    //instead of using services and event emitters 
    // we can use subject also to pass data from 1 component to another component


}
