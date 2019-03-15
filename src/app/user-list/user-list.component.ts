import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  selectedUser: User;
  errorMessage = '';

  constructor(
    private usersService: UsersService
  ) {
   //this.users.push(new User(0,'valentina', '', 'valentina@gmail.com', null, '123-456'));
   //this.users.push(new User(0,'zulema', '', 'zulema@gmail.com', null, '123-4576'));
   //this.users.push(new User(0,'nancy', '', 'nancy@gmail.com', null, '123-4568'));
   //this.selectedUser = this.users[0];
   }

  ngOnInit() {
    debugger;
    this.usersService.getAllUsers()
    .subscribe(data =>{
      this.users = data;
      this.selectedUser = this.users[0];
    },
    error =>{
      this.users =[];
      this.selectedUser = new User();
      this.errorMessage = error.toString();
      console.log('ERROR: '+error);
    });
  }

  selected(user: User){
   this.selectedUser = user;
  }

  getUser(id:number){
    this.usersService.getUser(id)
      .subscribe(data =>{
        this.users[0] = data;
        this.selectedUser = data;
    },
        error =>{
          this.users =[];
          this.selectedUser = new User();
          this.errorMessage = error.toString();
          console.log('ERROR: '+error);
        })
  }

}
