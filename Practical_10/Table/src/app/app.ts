import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  students = [
    { roll: 1, name: "Amit", marks: 85 },
    { roll: 2, name: "Neha", marks: 90 },
    { roll: 3, name: "Rahul", marks: 78 }
  ];

}
