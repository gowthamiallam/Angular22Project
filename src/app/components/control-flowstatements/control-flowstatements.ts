import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flowstatements',
  imports: [FormsModule],
  templateUrl: './control-flowstatements.html',
  styleUrl: './control-flowstatements.css',
})
export class ControlFlowstatements {

  isdivVisible = true;
  isOffer = false;                     //completely removing the text from th dom element its not hide and show 
  orderStatus = "kk";
  cityList = ["London", "Greater London", "Central London", "City Of London"];
  // cityList =[];
  studentList = [
    { stuid: 1, name: "Gowthami", city: "London", rollNo: 121 },
    { stuid: 2, name: "Venkatesh", city: "Greater London", rollNo: 123 },
    { stuid: 3, name: "Rajaram", city: "Central London", rollNo: 145 },
    { stuid: 4, name: "Ganga", city: "City Of London", rollNo: 127 },
    { stuid: 1, name: "Gowthami", city: "London", rollNo: 121 },
    { stuid: 2, name: "Venkatesh", city: "Greater London", rollNo: 123 },
    { stuid: 3, name: "Rajaram", city: "Central London", rollNo: 145 },
    { stuid: 4, name: "Ganga", city: "City Of London", rollNo: 127 },
    { stuid: 1, name: "Gowthami", city: "London", rollNo: 121 },
    { stuid: 2, name: "Venkatesh", city: "Greater London", rollNo: 123 },
    { stuid: 3, name: "Rajaram", city: "Central London", rollNo: 145 },
    { stuid: 4, name: "Ganga", city: "City Of London", rollNo: 127 }
  ]
  selectedStudent = "";
  toggle() {
    this.isdivVisible = !this.isdivVisible;
  }

}
