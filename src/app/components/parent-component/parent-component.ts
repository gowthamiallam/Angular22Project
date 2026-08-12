import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent implements AfterViewInit  {

  title = "Hello I GOT DATA FROM PARENT";
  data;

  receivedData() {
    this.data = "Hello I GOT DATA FROM CJHILD "
  }

  @ViewChild(ChildComponent) child!: ChildComponent;

  ngAfterViewInit() {
    this.child.childMethods();
  }
}
