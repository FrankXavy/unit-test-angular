import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {

  name: string = 'nicolas';
  age: number = 23;

  constructor() { }

  ngOnInit() {
  }

}
