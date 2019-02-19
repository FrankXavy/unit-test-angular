import { Component } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-test-angular';
  
  ngOnInit(){
    let calculator = new Calculator();
    let result = calculator.multiply(3,3);
    console.log(result === 9);
    console.log(result !== 12);

    let result2 = calculator.divide(6,2);
    console.log(result2 === 3);
    console.log(result2 !== 12);

    let result3 = calculator.divide(6,0);
    console.log(result3 === null);
  }
}
