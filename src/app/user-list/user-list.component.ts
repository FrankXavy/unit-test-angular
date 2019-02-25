import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User;
  selectedUser: User;

  constructor() {
   this.user = new User(0,'valentina', '', 'valentina@gmail.com', null, '123-456');
   }

  ngOnInit() {
  }

  selected(user: User){
   this.selectedUser = user;
  }

}
