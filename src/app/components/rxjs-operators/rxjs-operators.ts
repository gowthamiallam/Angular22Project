import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { concatMap, delay, distinct, distinctUntilChanged, filter, from, fromEvent, map, mergeMap, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  imports: [],
  templateUrl: './rxjs-operators.html',
  styleUrl: './rxjs-operators.css',
})
export class RxjsOperators implements AfterViewInit {
  dataList: any = [];
  dataList1: any = [];
  dataList2: any = [];
  private cdr = inject(ChangeDetectorRef);
  //view child decorator assign a reference of button element(html) in the dom to this createbutton(ts)
  //createBtn property is storing a reference to the button element in dom

  @ViewChild('createbtn')
  createBtn: ElementRef;   //createBtn has error but when i given strict falsein tsconfig .json it has gone

  createBtnObservable;



  array1 = [1, 3, 5, 7, 9];
  array2 = ['A', 'B', 'C', 'D'];
  //create a observable using of operator

  //of operator return a observable 
  //of operator return the asits array not extracting each element
  //from operator also emits the complete signal once all the data emitted

  // myobservable = of(this.array1);
  // myobservable = of(this.array1,this.array2);
  myobservable = of(this.array1, this.array2, 20, 30, 'Hello', true);

  //from operator return a observable 
  //each element will be emitting one after other 
  //from operator also emits the complete signal once all the data emit from the iiterable


  myobservable1 = from(this.array1);
  // myobservable = from('25678909');



  //creating a promise

  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50])
  })

  //Convert promise into observable using from method
  myobservable2 = from(this.promiseData);

  getStreamingOfData() {
    this.dataList = [];
    // this.myobservable1
    // this.myobservable2
    this.myobservable.subscribe({
      next: (value) => {
        console.log(value);
        this.dataList = [...this.dataList, value];
      },
      error(err) {
        alert(err.message)
      },
      complete() {
        //alert("all the data is streamed");
      },
    })

  }

  //create an observable from dom click event using fromevent operator
  //whenever button is clicked we are streaming the data 
  buttonClicked() {
    //2 arguments for fromevent 
    // 1. target element on which we want to listen to this evvent 
    //2. name of event which we want to listen on the target element 
    let count = 0;
    this.createBtnObservable = fromEvent(this.createBtn.nativeElement, 'click').subscribe(
      (data: any) => {
        console.log(data);
        this.showItem(++count);
      })
  }
  ngAfterViewInit() {
    console.log("because this lifecycle hook can be called when view of this componenent has been fully initialized");
    this.buttonClicked();
  }

  showItem(val) {
    let div = document.createElement('div'); //create a new div element by accessing the document object in jscode
    div.innerText = 'Item' + val; //setting inner text for the div element
    div.className = 'data-list'
    document.getElementById('container').append(div);
  }



  //MAP AND FILTER OPERATORS 
  //myObservable -2,4,6,8,10,12 //source 
  //Result -10,20,30,40,50,60
  //using  map operator we can transform the data emitted by an source observable in some way
  //using filter operator we can filter the data emitted by an source observable and retruns a new observable




  // myobservable3 = from([2, 4, 6, 8, 10, 12]) //return each element of the array one after the other


  // transformedObj = this.myobservable3.pipe(map((val: any) => {
  //   return val * 5;
  // }));

  //20,40,60
  // filterObs = this.transformedObj.pipe(filter((val: any) => {
  //   return val % 4 === 0;
  // }));

  //observable requires this pipe method to use the operators actually
  //without pipemethod we cannot use the map and filter operators
  //using the pipe /method  we can chain multiple operators together eg;map,filter
  //the result of map operator will be chained to filter operator using pipe as an 2nd argument
  //the 3rd operator also we can apply but the order will be important here 


  // myobservable3 = from([2, 4, 6, 8, 10, 12]);

  // transformedObj = this.myobservable3.pipe(map((val: any) => {
  //   return val * 5;
  // }), filter((val: any) => {
  //   return val % 4 === 0;
  // }));

  myobservable3 = from([2, 4, 6, 8, 10, 12]).pipe(map((val: any) => {
    return val * 5;
  }), filter((val: any) => {
    return val % 4 === 0;
  }));;



  getData() {
    this.dataList1 = [];
    console.log(this.myobservable3, "map operator")
    this.myobservable3.subscribe({
      next: (value) => {
        console.log(value);
        this.dataList1 = [...this.dataList1, value];
      },
      error(err) {
        alert(err.message)
      },
      complete() {
        //alert("all the data is streamed");
      },
    })
  }
  // getData() {
  //   this.dataList1 = [];
  //   console.log(this.transformedObj, "map operator")
  //   this.transformedObj.subscribe({
  //     next: (value) => {
  //       console.log(value);
  //       this.dataList1 = [...this.dataList1, value];
  //     },
  //     error(err) {
  //       alert(err.message)
  //     },
  //     complete() {
  //       //alert("all the data is streamed");
  //     },
  //   })
  // }


  // getData() {
  //   this.dataList1 = [];
  //   console.log(this.filterObs, "filter operator")
  //   this.filterObs.subscribe({
  //     next: (value) => {
  //       console.log(value);
  //       this.dataList1 = [...this.dataList1, value];
  //     },
  //     error(err) {
  //       alert(err.message)
  //     },
  //     complete() {
  //       //alert("all the data is streamed");
  //     },
  //   })

  // }



  //of operator
  array40 = [1, 2, 3, 4]
  arrayof = of(this.array40);

  //from operator

  array41 = [1, 2, 3, 4]
  arrayfrom = from(this.array41);

  //filter operator

  arrayfilter = [1, 2, 3, 4]
  myobservable4 = from(this.arrayfilter);
  filterres = this.myobservable4.pipe(filter((res: any) => {
    return res % 4 === 0;
  }));


  //distinct or distinct until changed operators
  //use from operator only for distinctuntil or distinct for the duplicate values
  arraydistinct = [1, 2, 2, 3, 3, 3, 4]
  myobservable5 = from(this.arraydistinct);
  // distinctres = this.myobservable5.pipe(distinct() );
  distinctres = this.myobservable5.pipe(distinctUntilChanged());


  //map operator
  array43 = [1, 2, 3, 4, 5];
  myobservable6 = from(this.array43);
  mapres = this.myobservable6.pipe(map((val: any) => {
    return val * 10
  }))

  //switchmap operator
  // array44 = [1, 2, 3, 4, 5];
  // myobservable7 = from(this.array44);
  // switchmapres = this.myobservable7.pipe(switchMap((val: any) => {
  //   // Returning an Observable as switchMap expects
  //   return of(val * 2);
  // }))


  //switch map cancels the previous observable and takes the latest observables
  array44 = [1, 2, 3, 4, 5];
  myobservable7 = from(this.array44);
  switchmapres = this.myobservable7.pipe(switchMap((val: number) => {
    console.log(`Starting operation for: ${val}`);
    return of(val * 2).pipe(
      delay(1000), // Delays the completion by 1 second
      tap(() => console.log(`Finished inner observable for: ${val}`))
    );
  })
  );

  array45 = [1, 2, 3, 4, 5];
  myobservable8 = from(this.array45);
  mergeMapRes = this.myobservable8.pipe(
    mergeMap((val: number) => {
      return of(val * 2).pipe(delay(1000));
    })
  );

  
  array46 = [1, 2, 3, 4, 5];
  myobservable9 = from(this.array46);
  concatMapRes = this.myobservable9.pipe(
    concatMap((val: number) => {
      return of(val * 2).pipe(delay(1000));
    })
  );


  // mergeMapRes.subscribe((res) => console.log('mergeMap Output:', res));


  getOperatorData(val: any) {
    if (val === 'filter') {
      this.dataList2 = [];
      this.filterres.subscribe({
        next: (value) => {
          console.log(value, "Filterdata");
          this.dataList2 = [...this.dataList2, value];
        },
        error(err) {
          alert(err.message)
        },
        complete() {
          //alert("all the data is streamed");
        },
      })
    } else if (val === 'of') {
      this.dataList2 = [];
      this.arrayof.subscribe({
        next: (value) => {
          console.log(value, "of data");
          this.dataList2 = [...this.dataList2, value];
        },
        error(err) {
          alert(err.message)
        },
        complete() {
          //alert("all the data is streamed");
        },
      })
    } else if (val === 'from') {
      this.dataList2 = [];
      this.arrayfrom.subscribe({
        next: (value) => {
          console.log(value, "from data");
          this.dataList2 = [...this.dataList2, value];
        },
        error(err) {
          alert(err.message)
        },
        complete() {
          //alert("all the data is streamed");
        },
      })
    } else if (val === 'distinct') {
      this.dataList2 = [];
      this.distinctres.subscribe({
        next: (value) => {
          console.log(value, "distindct data");
          this.dataList2 = [...this.dataList2, value];
        },
        error(err) {
          alert(err.message)
        },
        complete() {
          //alert("all the data is streamed");
        },
      })
    }
    else if (val === 'map') {
      this.dataList2 = [];
      this.mapres.subscribe({
        next: (value) => {
          console.log(value, "map data");
          this.dataList2 = [...this.dataList2, value];
        },
        error(err) {
          alert(err.message)
        },
        complete() {
          //alert("all the data is streamed");
        },
      })
    }
    else if (val === 'switchmap') {
      this.dataList2 = [];
      this.switchmapres.subscribe({
        next: (value) => {
          console.log(this.dataList2, "befor");
          console.log(value, "switch map Final Emitted Output:");
          if (value) {
            this.dataList2 = [...this.dataList2, value];
            this.cdr.markForCheck();
          }
          console.log(this.dataList2, "after");
        },
        error(err) {
          alert(err.message)
        },
        complete() {
          //alert("all the data is streamed");
        },
      })
    }
    else if (val === 'mergemap') {
      this.dataList2 = [];
      this.mergeMapRes.subscribe({
        next: (value) => {
          console.log(value, "merge map Final Emitted Output:");
          if (value) {
            this.dataList2 = [...this.dataList2, value];
            this.cdr.markForCheck();
          }
          console.log(this.dataList2, "after");
        },
        error(err) {
          alert(err.message)
        },
        complete() {
          //alert("all the data is streamed");
        },
      })
    }
    else if (val === 'concatmap') {
      this.dataList2 = [];
      this.mergeMapRes.subscribe({
        next: (value) => {
          console.log(value, "merge map Final Emitted Output:");
          if (value) {
            this.dataList2 = [...this.dataList2, value];
            this.cdr.markForCheck();
          }
          console.log(this.dataList2, "after");
        },
        error(err) {
          alert(err.message)
        },
        complete() {
          //alert("all the data is streamed");
        },
      })
    }

  }
}

