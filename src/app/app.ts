import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalForms } from './components/signal-forms/signal-forms';
// import { Variables } from './components/variables/variables';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular22Project');
}
