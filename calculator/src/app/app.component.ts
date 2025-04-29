import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'calculator';

  number1: number = 0;

  number2: number = 0;

  result: number = 0;

  add():void{
    
    this.result = this.number1+this.number2;
  }

  subtract(): void{
    this.result = this.number1 - this.number2
  }
}
