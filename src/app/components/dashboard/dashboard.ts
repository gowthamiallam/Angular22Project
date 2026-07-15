import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // Your data array
  users = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', role: 'Editor' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Viewer' },
    { id: 4, name: 'Emma Davis', email: 'emma@example.com', role: 'Contributor' }
  ];
 }
