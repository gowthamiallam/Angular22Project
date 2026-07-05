import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {

  //Creating the variables 
  studentName: string = "Gowthami";
  rollNo: number = 123;
  isStudentActive: boolean = false;
  currentDate: Date = new Date();           //Single Single Entity Values

  teacherName = "Rahul";

  //Creating the array List 

  cityList: string[] = ["London", "Central London"];   //Array of string 
  rollNoList: number[] = [11, 12, 13];                //Array of number 

  //Single Object 
  student = {
    studName: 'Ram',
    rollNo: 121,
    city: 'London'
  }

  //Array of multiple Objects
  studentList = [
    {
      studName: 'Ram',
      rollNo: 121,
      city: 'London'
    },
    {
      studName: 'Krish',
      rollNo: 122,
      city: 'Centalondon'
    },
    {
      studName: 'Shyam',
      rollNo: 123,
      city: 'EastLondon'
    }

  ]

  employee: any = "chetan" //For this variable we given any this will allow you  any type of data to getting stored over here
  //we will  assign the value like string ,boolean anything 
  //When ever the component will load this is the first thing which will execute by default 



  constructor() {
    // debugger
    console.log(this.studentName);  //we can access the variable by using this.studentName
    console.log(this.studentList);
    console.log(this.studentList[1]);
    this.studentName = "Venkatesh";
    this.employee = 123
    this.employee = false;
    console.log("After Change" + " " + this.studentName);


  }


}
