import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 implements OnInit {

  shareservice: SharedService = inject(SharedService)


  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // this.shareservice.getApi().subscribe((res) => {
    //       console.log(res,"COMPONENT 222");
    // })
    this.shareservice.user$.subscribe(res => {
      console.log(res, "COMPONENT 222");
    });

  }
}
