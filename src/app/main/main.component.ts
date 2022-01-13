import { Component, OnInit } from '@angular/core';
import { Cars } from '../Car';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  readonly cars = [
    new Cars(1, 'car1', 'car1 brand', 'car1 description'),
    new Cars(2, 'car2', 'car2 brand', 'car2 description'),
    new Cars(3, 'car3', 'car3 brand', 'car3 description'),
    new Cars(4, 'car4', 'car4 brand', 'car4 description'),
    new Cars(5, 'car5', 'car5 brand', 'car5 description'),
    new Cars(6, 'car6', 'car6 brand', 'car6 description'),
    new Cars(7, 'car7', 'car7 brand', 'car7 description'),
    new Cars(8, 'car8', 'car8 brand', 'car8 description'),
    new Cars(9, 'car9', 'car9 brand', 'car9 description'),
    new Cars(10, 'car10', 'car10 brand', 'car10 description'),
  ];
  constructor() {}

  ngOnInit() {}
}
