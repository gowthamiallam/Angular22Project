import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-service';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 implements OnInit {

  shareservice: SharedService = inject(SharedService)


  ngOnInit(): void {
    // this.getData();
    // this.observableConcept();
    // this.subjectConcept();
    // this.behaviourSubjectConcept();
    // this.replaySubjectConcept();
    this.asyncSubjectConcept();
  }

  getData() {
    // this.shareservice.getApi().subscribe((res) => {
    //       console.log(res,"COMPONENT 222");
    // })
    this.shareservice.user$.subscribe(res => {
      console.log(res, "COMPONENT 222");
    });

  }

  observableConcept() {
    //OBSERVABLES ARE UNICAST 
    //OBSERVABLES WILL NOT EMIT SAME DATA 

    //Observable will not emit same data in case of random sometimes

    let myobservable = new Observable((observer) => {
      // observer.next(Math.random()); //for random 
      observer.next(1);
      observer.next(2); //for static
    })


    myobservable.subscribe((data) => { console.log(data, "TEST-obs") });    //Subscriber 1 or component 1

    myobservable.subscribe((data) => { console.log(data, "TEST1-obs",) });    //Subscriber 2 or component 2
  }
  subjectConcept() {
    //SUBJECT ARE MULTICAST
    //SUBJECT WILL EMIT THE SAME DATA  
    //WHEN SUBJECT EMIT THE DATA THE DATA WILL BE SUBSCRIBED BY THE MANY SUBSCRIBERS AND GET THE SAME VALUE ALMOST

    //SUBJECT DOES NOT HOLD THE INITIAL VALUE ONCE THE NEW VALUE IS EMITTED THE NEW SUBSCRIBER DOES NOT GET THE LATEST VALUE

    const subject = new Subject();

    subject.subscribe((data) => { console.log(data, "TEST-sub") });    //Subscriber 1 or component 1

    subject.subscribe((data) => { console.log(data, "TEST1-sub") });  //Subscriber 2 or component 2

    // subject.next(Math.random()); for random
    subject.next(2026);   //EMITTING NEW VALUE


    subject.subscribe((data) => { console.log(data, "TEST2-sub") });

  }

  behaviourSubjectConcept() {

    //BEHAVIOUR HOLD THE INITIAL VALUE WHEN THERE IS NO NEW VALUE EMIT FOR A SUBSCRIBER

    const behaviourSubject = new BehaviorSubject<number>(100);

    behaviourSubject.subscribe((data) => { console.log(data, "SUBSCRIBER :1") }); //Subscriber 1 or component 1

    behaviourSubject.subscribe((data) => { console.log(data, "SUBSCRIBER :2") }); //Subscriber 2 or component 2

    behaviourSubject.next(2020);

    //ONCE THE BEHAVIOUR SUBJECT EMIT THE DATA
    // THE NEW SUBSCRIBER HOLD THE LAST EMITTED VALUE NOT AN INITIAL VALUE

    behaviourSubject.subscribe((data) => { console.log(data, "SUBSCRIBER :3") });

    behaviourSubject.next(2023);


  }

  replaySubjectConcept() {

    // REPLAY SUBJECT REPLAYS OLD VALUES TO NEW SUBSCRIBERS WHEN THEY FIRST SUBSCRIBE
    //REPLAY SUBJECT STORES THE OLD VALUES IN BUFFER
    //BUFFER SIZE (1ST ARGUMENT) - TELLS HOW MANY PREVIOUSLY EMITTED DATA NEED TO STORE IN THE BUFFER
    //WINDOW TIME (2ND ARGUMENT) SPECIFIES TIME INTERVAL -TELLS HOW LONG WE WANT TO STORE THE PREVIOUSLY
    //EMITTED IN THE BUFFER



    // const replaysub = new Subject();  //check the difference
    // const replaysub = new ReplaySubject();
    // const replaysub = new ReplaySubject(2); //buffer size given is 2 so will get the last 2 old value from buffer
    const replaysub = new ReplaySubject(2, 1000); // The amount of time to keep the values in the buffer

    replaysub.next(100);
    replaysub.next(200);
    replaysub.next(300);

    //SUBSCRIBER 1
    replaysub.subscribe((data) => { console.log(data, "SUBSCRIBER 1") });

    //SUBSCRIBER 2
    replaysub.subscribe((data) => { console.log(data, "SUBSCRIBER 2") });

    replaysub.next(2020);

    //SUBSCRIBER 3
    replaysub.subscribe((data) => { console.log(data, "SUBSCRIBER 3") });

    replaysub.next(2023);
  }

  asyncSubjectConcept() {
    //ASYNC SUBJECT  IS GOING TO EMIT THE LAST EMITTED VALUE TO ALL ITS SUBSCRIBERS

    //ASYNC SUBJECT IS WILL ONLY EMIT THE LAST EMITTED VALUE TO ALL ITS SUBSCRIBERS ONLY AFTER COMPLETE METHOD.

    const asyncsub = new AsyncSubject();

    asyncsub.next(100);
    asyncsub.next(200);
    asyncsub.next(300);

    // asyncsub.complete(); //LATEST VALUE IS 300

    // asyncsub.next(2020); //ONCE THE COMPLETE SIGNAL IS CALLED NO VALUE WILL BE EMITTED IN CASE OF ASYNC SUBJECT OR OBSERVABLE ALSO

    //SUBSCRIBER 1
    asyncsub.subscribe((data) => { console.log(data, "SUBSCRIBER 1") });



    asyncsub.complete(); // LATEST VALUE IS 300
    asyncsub.next(400); //ONCE THE COMPLETE SIGNAL IS CALLED NO VALUE WILL BE EMITTED IN CASE OF ASYNC SUBJECT OR OBSERVABLE ALSO
    asyncsub.complete(); // THIS COMPLETE SIGNAL WILL BE IGNORED

    //SUBSCRIBER 2
    asyncsub.subscribe((data) => { console.log(data, "SUBSCRIBER 2") });

  }
}
