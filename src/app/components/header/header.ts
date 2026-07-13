import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  userName: string = 'Venkatesh';
  constructor(private router: Router) {

  }
  logout() {
    this.router.navigate(['/login'])
  }
}
