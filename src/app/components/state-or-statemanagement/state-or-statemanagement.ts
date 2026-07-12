import { Component } from '@angular/core';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-state-or-statemanagement',
  imports: [Loader],
  templateUrl: './state-or-statemanagement.html',
  styleUrl: './state-or-statemanagement.css',
})
export class StateOrStatemanagement {
  counter: number = 0;
  //counter property is nothing but the state in angular application
  //counter property is storing the data
  //counter is a state which is storing some data and whenever the value of counter state changes that changed value
  //we are rendering it in ui this is 1 example of state 

  isLoading = false;
  //isLoading property is nothing but the state in angular application
  //isLoading property is storing the data
  //isLoading is a state which is storing some data and whenever the value of isLoading state changes 
  //we are rendering laoding component (loader based on true or false)showing it in ui this is 1 example of state 


  //the values of counter and isloading state will set in memory


  courses: any = []
  //courses property is nothing but the state in angular application
  //courses is also a state which is storing some data and that we are rendering it in ui
  //but the value of this state we are not reading from memory and we are reading from backend i.e database

  increment() {
    this.counter++;
  }
  login() {
    this.isLoading = true;

    // this.isLoading =false;
  }

  //but sometimes we might want to have a state we want to fetch data from backend api
  ngOnInit() {
    // this.courses =this.courseService.getAll(); 
  }
}
