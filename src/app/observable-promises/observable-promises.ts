import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-promises',
  imports: [],
  templateUrl: './observable-promises.html',
  styleUrl: './observable-promises.css',
  // changeDetection: ChangeDetectionStrategy.Eager,
})
export class ObservablePromises {
  dataList: any = [];
  // dataList = signal<any[]>([]);

  // 2. Inject ChangeDetectorRef right here in the class property definitions
  private cdr = inject(ChangeDetectorRef);

  //old way of injecting 
  // constructor(private cdr: ChangeDetectorRef) {

  // }

  //CREATING AN OBSERVABLE AND TO CREATE THIS WE NEED TO CALL CONSTRUCTOR OF AN OBSERVABLE 
  //creating observable new Observable() constructor and assign to property

  //CREATE AN OBSERVABLE
  //creating an observable currently this observable is not emitting any data 
  // myObservable1 = new Observable();

  //Emit some data to this observable constructor we need to pass a call back function
  //this call back function is goring to receive an argument observer 
  //observer is injected by rxjs libarary to this call back function
  //observer is nothing but the subscriber  so the subscribers which is going to subscribe to this observable
  //we are receiving those subscribers to this observer parameter no in this observer parameter if we want to 
  //emit some value need to call next method 
  //if we want to emit some value we need to call next method on the observer and the obsesrver is going 
  // to receive all these subscribers who is subscriberd to this observable 

  //using this next method we want to emit some data 
  //observable will emit a data only if there is any subscriber 
  //observable will not emit data if ther is not subscriber 

  //creating an observable currently this observable is emitting some data over here
  //myObservable1 is going to emit the array of data

  //Observable Code
  myObservable1 = new Observable((observer) => {
    observer.next([1, 2, 3, 4, 5]);   //Observable is returning the single data here which is single array
    //Observable is event emitter which is going to emit next event here

  });


  //creating the observer or subsciber to listen for the event or data  getAsyncData
  //to subscribe the observable
  // access the myObservable1 property this. in order to subscribe to this observable we can use subscribe method 


  //whenever a new data will be emitted from this observable this code will be notified about that 
  //becuse we have subscribed to that observable but currently we are not doing anything with the data which
  // the observable is going to emit 


  //IMPORTANT 

  // getAsyncData() {

  //Observer Code
  // this.myObservable1.subscribe();

  //Event listner or subscriber since we have subscribed to that observable every time this next 
  //event or any other event this observable will emit this code will be notified about that 

  //subscribed to an observable but currently we are not doing anything with the data 
  // }

  //IMPORTANT 

  // we need to specify the handler funtion to use the data 
  //in order to handle to event or data we need event handler 
  //in this case when we are calling this next method it is going to emit next event 
  //in order to handle that  next event to this subscribe method we need to pass a call back function
  //this subscribe method takes three call back functions 
  //next
  //error
  //complete
  //all these call back functions are optional


  //next -this call back functions gets executed whenever the observable emits the next event
  //error-this call back function gets called whenever the observable emits the error event 
  //complete-this call back function gets called whenever the obsevable emits the complets event.

  //currently this observable is emitting only next event not emitting any error or completion event  


  // getAsyncData() {

  //   // Observer Code
  //   //next,error,complete

  //   //Event listner or subscriber since we have subscribed to that observable 
  //   // WE NEED TO SPECIFY A CALL BACK FUNCTION
  //   //THE FIRST CALL BACK FUNCTION IS GOING TO HANDLE THE next  EVENT AND THIS CALL BACK FUCNTION ALSO 
  //   //GOING TO RECEIVE THE VALUE next EVENT HAS EMITTED

  //   this.myObservable1.subscribe((val) => {
  //     this.dataList = val;
  //     console.log(this.dataList, "Data coming in the single array ");
  //     //subscribed to an observable and we are using the data by event handler
  //   });
  // }


  // myObservable = new Observable(observer => {

  //   // //Observable is returning the stream of data
  //   // observer.next(1); //here 1st value will be emitted 
  //   // observer.next(2);//here 2nd value will be emitted 
  //   // observer.next(3);//here 3rd value will be emitted 
  //   // observer.next(4);//here 4th value will be emitted 
  //   // observer.next(5);//here 5th value will be emitted 
  // })

  myObservable = new Observable(observer => {
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000)
  })

  getObservableData() {
    this.dataList = [];
    this.myObservable.subscribe((val: any) => { //receving the first value and pushing again 2nd 3rd 4th and 5 th values and pusing 
      // this.dataList.push(val);
      // console.log(this.dataList, "Data streaming in the form of observables ");


      // 3. Keep the spread operator logic
      this.dataList = [...this.dataList, val];
      console.log(this.dataList, "Data streaming in the form of observables");

      // 4. Force Angular to immediately check this component and refresh the UI
      this.cdr.detectChanges();


      //INCASE OF USING SIGNALS USE THIS CODE 
      // 2. Use the .update() method and return a NEW array reference
      // this.dataList.update(currentList => [...currentList, val]);
      // console.log(this.dataList(), "Data streaming in the form of observables");
    });
  }

  // myObservable = new Observable(observer => {

  //   //Observable is returning the stream of data
  //   observer.next("1");
  //   observer.next("2");
  //   observer.next("3");
  //   observer.next("4");
  //   observer.next("5");
  //   observer.complete();
  // })

  // getObservableData() {
  //   // this.myObservable.subscribe(res => {
  //   //   console.log(res);
  //   // }
  //   // )

  //   this.myObservable.subscribe({
  //     next: value => console.log(value),
  //     complete: () => console.log('Done!')
  //   });
  // }
}
