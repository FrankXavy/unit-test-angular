import { Component } from '@angular/core';
import { Calculator} from './calculator'
import { UsersService } from  './users.service'
import { User } from './user';

import { Person} from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'unit-test-angular';
  user = new User();

  person: Person;


  constructor(
    private _usersService: UsersService,

  ){
    this.person = new Person(
      'Frank',
      'Flores',
      34,
      78,
      1.76
    );
  }

  ngOnInit(){
    //let calculator = new Calculator();
    //let result = calculator.multiply(3,3);

    //console.log(result===9);
    //console.log(result!==12);

    //let result1 = calculator.divide(6,2);
    //console.log(result1===3);
    //console.log(result1!==12);

    //let result2 = calculator.divide(6,0);
    //console.log(result2===null);


  this._usersService.getUser(1)
  .subscribe(
    data => {
      this.user = data;
      console.log(this.user);
    }, error => {
      console.log(error);
    });
  }
}
