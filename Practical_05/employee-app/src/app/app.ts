import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  employeeForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      gender: [''],
      department: ['', Validators.required],
      skills: this.fb.group({
        java: [false],
        python: [false],
        angular: [false]
      }),
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit() {
    this.submitted = true;

    if (this.employeeForm.valid) {
      alert("Employee Registered Successfully!");
      console.log(this.employeeForm.value);
    }
  }
}