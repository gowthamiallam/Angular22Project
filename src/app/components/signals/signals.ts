import { Component, computed, DoCheck, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
//This is a typescript class which is decorated with 
//@Component Decorator which we need to specify the object 

export class Signals implements DoCheck {
  counter: number = 0;
  message: string[] = [];

  //changing the counter property into signal import signal


  //creating a signal as initial value we ar passing 0 this is Wrigtable signal we can pass string or object or boolean or array
  // counter = signal(0);

  //To show you that angular is running a cdc  Whenever we click on the buttons - and +
  //ngDoCheck() gets called when ever cdc runs by angular


  //creating a signal for count value
  countervalue = signal(0);
  messages = signal<string[]>([]);
  doubleCounter = computed(() => this.countervalue() * 2);

  constructor() {
    console.log(this.countervalue());           //Accessing the signal value in ts
    console.log(this.messages());
    effect(() => console.log(this.countervalue(), "Effectmethod"));
  }
  ngOnInit() {
    this.messages.update(() => []);
  }
  ngDoCheck() {
    console.log("Angular Change Detection called");
  }
  //use whenever not using signals
  decrement() {
    this.counter--;
  }
  increment() {
    this.counter++;
  }

  // decrement() {
  //   // this.counter.set(this.counter() - 1);
  //   this.counter.update((previousvalue) => previousvalue - 1);
  // }
  // increment() {
  //   //  this.counter.set(this.counter() +1); //based on previous value we are using this set method and updating
  //   this.counter.update((previousvalue) => previousvalue + 1);
  // }



  //Update method will use for immutable values For EXAMPLE :String,boolean,number
  //Mutate method will use for mutable values like array &objects but its not working in angular latest version
  plusFunction() {
    // this.countervalue.set(this.countervalue() + 1);

    // this.countervalue.update((prevvalue) => prevvalue + 1); 

    // this.messages.mutate((prevmsg:any)=>prevmsg.push('xxx'+this.countervalue());


    this.countervalue.update(val => val + 1);
    this.messages.update((prevmsg) => [...prevmsg, 'COUNTER VALUE IS' + this.countervalue()]);
  }

  minusFunction() {
    // this.countervalue.set(this.countervalue() - 1);

    // this.countervalue.update((prevvalue) => prevvalue - 1);

    // this.messages.mutate((prevmsg:any)=>prevmsg.pop();

    this.countervalue.update(val => val - 1);
    this.messages.update(prevMsg => prevMsg.filter((_, index) => index !== this.countervalue()));
  }
}

