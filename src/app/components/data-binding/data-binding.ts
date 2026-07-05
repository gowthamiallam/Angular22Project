import { Component, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding implements DoCheck{

  productName: string = "Laptop"
  productPrice = 1200;
  maxAllowedChar = 5;
  myDynamicType = 'radio';
  myDynamicType1 = 'checkbox';
  isProductActive = true;

  ngDoCheck() {
    console.log("Angular Change Detection called 222222222==>");
  }
  showWelcomeText() {
    alert("WELCOME V22")
  }
  onDropDownChange() {
    alert("DropDown has changed")
  }

  onMouseEnter() {
    console.log("Mouse Entered")
  }
  onMouseLeft() {
    console.log("Mouse Left Div")
  }
}
