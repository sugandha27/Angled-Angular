import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';


// const DISH = {
//   id: '0',
//   name: 'Uthappizza',
//   image: '/assets/images/uthappizza.png',
//   category: 'mains',
//   featured: true,
//   label: 'Hot',
//   price: '4.99',
//   // tslint:disable-next-line:max-line-length
//   description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
//   comments: [
//        {
//            rating: 5,
//            comment: 'Imagine all the eatables, living in conFusion!',
//            author: 'John Lemon',
//            date: '2012-10-16T17:57:28.556094Z'
//        },
//        {
//            rating: 4,
//            comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
//            author: 'Paul McVites',
//            date: '2014-09-05T17:57:28.556094Z'
//        },
//        {
//            rating: 3,
//            comment: 'Eat it, just eat it!',
//            author: 'Michael Jaikishan',
//            date: '2015-02-13T17:57:28.556094Z'
//        },
//        {
//            rating: 4,
//            comment: 'Ultimate, Reaching for the stars!',
//            author: 'Ringo Starry',
//            date: '2013-12-02T17:57:28.556094Z'
//        },
//        {
//            rating: 2,
//            comment: 'It\'s your birthday, we\'re gonna party!',
//            author: '25 Cent',
//            date: '2011-12-02T17:57:28.556094Z'
//        }
//    ]
// };
// const comm1 = DISH.comments[1];
// const comm0 = DISH.comments[0];
// const comm2 = DISH.comments[2];
// const comm3 = DISH.comments[3];
// const comm4 = DISH.comments[4];
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    @Input()
    dish:Dish;
//   cm1 = comm1;
//   cm0 = comm0;
//   cm2 = comm2;
//   cm3 = comm3;
//   cm4 = comm4;
  constructor() { }

  ngOnInit() {
  }

}
