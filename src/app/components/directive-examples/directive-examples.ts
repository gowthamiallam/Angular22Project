import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-examples',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './directive-examples.html',
  styleUrl: './directive-examples.css',
})
export class DirectiveExamples {

  divclassName: string = 'bg bg-success';
  isCheckActive: boolean = false;
  num1 = "";
  num2 = "";
  isTextValid: boolean = false;
  inputColorValue = "";
  div4css: any = {}
  addDivClass(className: string) {
    this.divclassName = className;
  }
  checkCharLength() {
    if (this.num2.length > 5) {
      this.isTextValid = true;
    } else {
      this.isTextValid = false;
    }
  }
  changeType(type: string) {
    if (type == 'circle') {
      this.div4css = {
        'background-color': 'green',
        height: '200px',
        width: '200px',
        'border-radius': '50%'
      }
    } else {
      this.div4css = {
        'background-color': 'red',
        height: '200px',
        width: '200px',
      }
    }
  }
}
