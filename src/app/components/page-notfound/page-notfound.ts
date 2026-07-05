import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-page-notfound',
  imports: [],
  templateUrl: './page-notfound.html',
  styleUrl: './page-notfound.css',
})
export class PageNotfound implements DoCheck {

  ngDoCheck() {
    console.log("Angular Change Detection called")
  }
}
