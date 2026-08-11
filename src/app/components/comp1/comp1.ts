import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-service';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 implements OnInit {
  shareservice: SharedService = inject(SharedService)


  ngOnInit(): void {
    this.getData();
  }

  getData() {

    // this.shareservice.getApi().subscribe((res) => {
    //   console.log(res, "COMPONENT 111");
    // })

    this.shareservice.user$.subscribe(res => {
      console.log(res, "COMPONENT 111");
    });


  }
}
