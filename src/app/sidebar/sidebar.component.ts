import { Component, OnInit,Input } from '@angular/core';
import { Cars } from '../Car';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()cars:Cars[];
  constructor() { }

  ngOnInit() {
  }

}