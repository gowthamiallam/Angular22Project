import { Component } from '@angular/core';

@Component({
  selector: 'app-service-content',
  imports: [],
  templateUrl: './service-content.html',
  styleUrl: './service-content.css',
})

export class ServiceContent {
  fruitsList: any= [
    {
      id: 1,
      title: 'Mangoes',
      text: 'Juicy & sweet, packed with Vitamin C',
      imagePath: '/images/mango.jpg' // Located in public/images/strawberry.jpg
    },
    {
      id: 2,
      title: 'Blueberry',
      text: 'Bursting with antioxidants, great for the brain',
      imagePath: '/images/blueberry.jpg'
    },
    {
      id: 3,
      title: 'Kiwi',
      text: 'Tropical tang with effortless style',
      imagePath: '/images/kiwi.jpg'
    },
    {
      id: 4,
      title: 'Apples',
      text: 'Tropical tang with effortless style',
      imagePath: '/images/apples.jpg'
    },
    {
      id: 5,
      title: 'Raspberry',
      text: 'Tropical tang with effortless style',
      imagePath: '/images/raspberry.jpg'
    },
    {
      id: 6,
      title: 'Strawberry',
      text: 'Tropical tang with effortless style',
      imagePath: '/images/strawberry.jpg'
    }
  ];
  ngOnInit() {

  }
}
