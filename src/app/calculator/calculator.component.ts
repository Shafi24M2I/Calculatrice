import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  randomOne : number = 0;
  randomTwo : number = 0;
  result : number = 0;

  generateRandom():number{
    return Math.floor(Math.random() * 1000)
  }
  generateOne():void{
    this.randomOne = this.generateRandom();
  }
  generateTwo():void{
    this.randomTwo = this.generateRandom();
  }

  addition(NumberOne: number , NumberTwo: number):number{
    return this.result = NumberOne + NumberTwo;
  }
  soustraction(NumberOne: number , NumberTwo:number):number{
    return this.result = NumberOne - NumberTwo;
  }
  multipication(NumberOne: number , NumberTwo:number):number{
    return this.result = NumberOne * NumberTwo;
  }
  division(NumberOne: number , NumberTwo:number):number{
    return this.result = NumberOne / NumberTwo;
  }

}
