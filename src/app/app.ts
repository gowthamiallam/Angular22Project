import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalForms } from './components/signal-forms/signal-forms';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Hero } from './components/hero/hero';
import { ServiceContent } from './components/service-content/service-content';
import { SampleContent } from './components/sample-content/sample-content';
import { Loader } from './components/loader/loader';
import { LoginReactive } from './components/login-reactive/login-reactive';
import { Dashboard } from './components/dashboard/dashboard';
// import { Variables } from './components/variables/variables';
// ,Header,Sidebar,RouterOutlet,
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular22Project');
  show = false;
}
