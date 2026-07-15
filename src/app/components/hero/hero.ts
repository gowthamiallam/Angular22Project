import { Component } from '@angular/core';
import { ServiceContent } from '../service-content/service-content';
import { SampleContent } from '../sample-content/sample-content';
import { Loader } from '../loader/loader';
import { Header } from '../header/header';
import { LoginReactive } from '../login-reactive/login-reactive';
// ServiceContent,SampleContent,Loader
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
