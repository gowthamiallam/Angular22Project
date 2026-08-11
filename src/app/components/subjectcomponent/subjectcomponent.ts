import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subjectcomponent',
  imports: [],
  templateUrl: './subjectcomponent.html',
  styleUrl: './subjectcomponent.css',
})
export class Subjectcomponent implements OnInit {

  ngOnInit(): void {

    //Observable
    // let myobservable = new Observable((observer) => {
    //   observer.next(Math.random());
    // })


    // myobservable.subscribe((data) => { console.log(data) });    //Subscriber 1 or component 1

    // myobservable.subscribe((data) => { console.log(data) });    //Subscriber 2 or component 2



    //Subject
    // const subject = new Subject();

    // subject.subscribe((data) => { console.log(data) });    //Subscriber 1 or component 1

    // subject.subscribe((data) => { console.log(data) });    //Subscriber 2 or component 2

    // subject.next(Math.random());

    //RANDOM API GET REQUEST
    // const myobservabledata = ajax('https://randomuser.me/api/'); //this data is returning an observable  and storing the data in the data variable


    //so we need to subscribe to an observable 
    //and whenever data observable will emit some new  data we  need to do some thing  with data 

    // myobservabledata.subscribe((res) => { console.log(res) });   //Subscriber 1 or component 1

    // myobservabledata.subscribe((res) => { console.log(res) });  //Subscriber 2 or component 2

    // myobservabledata.subscribe((res) => { console.log(res) }); //Subscriber 2 or component 2


    //check the network tab the api call is made 3 times 
    //observable is unicast 
    // first subscriber will make  an ajax call
    // second subscriber will make an ajax call
    // 3rd subscriber will make an ajax call
    // we dont want 3 ajax calls because the url is same and api same and data is same and
    //we dont want to make http request each time if there is new subscriber 

    //we can solve this problem using subject
    //subject is multicast - a subject can give same data to all the subscribers

    //RANDOM API GET REQUEST
    const subject = new Subject();
    const data1 = ajax('https://randomuser.me/api/'); //this data is returning an observable  and storing the data in the data variable


    //so we need to subscribe to an observable 
    //and whenever data observable will emit some new  data we  need to do some thing  with data 

    subject.subscribe((res) => { console.log(res) });   //Subscriber 1 or component 1

    subject.subscribe((res) => { console.log(res) });  //Subscriber 2 or component 2

    subject.subscribe((res) => { console.log(res) }); //Subscriber 2 or component 2

    data1.subscribe(subject);     //subject here is the consumer of the value not providing any value

    // subject here is the consumer of the value which ajax observable  is going to  return
    //subject will consume the data which the observablle is returning and it convert into subject 
    //and then it will pass the same data to the subscribes 


  }


  //Observables
  //in the above example we are using math.random 
  // if we are using observable  both subscribers should recieve the same data 

  //if we check console log both subscribers will not getting the same data that is the drawback of observables.
  //here observable will not emit same data sometimes to the subscribed consumers /subscribers 
  //observable does not emit the same value to all iits subscribers in all the cases 
  //in same cases emit the same value but in this case generating random number observable is not going to 
  //emit the same value for all its subscribers.


  //this is observables works it is unicasat 
  //it does not emit the same value for all its subscribers


  //Subject

  //Whenever subject will emit a value both the subscribers will get the same value in case of observable 
  //both the subscribers are getting the different value
  // since we are using subject and since it is multicast both the subscribers will get the same value

  //this is what the unicast and multicast

  // difference 1

  //observable -it is a unicaste
  //observable - it does not always emit the same value or data for all its subscribers

  //subject -it is a multicaste
  //subject - it  emits the same data  or value for all its subscribers

  //depending on the use case use observable or subject (if you want to emit the same for all the subscibers)

  // difference 2

  //observable -an observable always provide some data  or emit some data 
  //observable - 

  //subject -subject is a data provider  provide some data as well as data consumer 
  //subject - 


}
