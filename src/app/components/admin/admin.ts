import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  //Since you are working in a standalone component,
  //  you don't inject services into a constructor anymore (though you still can if you want).
  //  The modern Angular way uses the inject() function, which keeps your code clean and highly readable.
  private router = inject(Router);
  adminProfilePage() {
    this.router.navigate(['/admin/profile']);
  }
  adminSettingsPage() {
    this.router.navigate(['/admin/settings']);
  }
}
