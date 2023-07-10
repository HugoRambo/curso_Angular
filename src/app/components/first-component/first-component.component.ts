import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Matheus"
  age: number= 30
  job: string = 'programador'
  hobbies = ['Estudar', 'Cozinha', 'dormir']
  car = {
    name: "polo",
    ano: 2019
  }
}
