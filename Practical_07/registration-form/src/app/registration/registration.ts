import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  user = {
    name: '',
    email: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
