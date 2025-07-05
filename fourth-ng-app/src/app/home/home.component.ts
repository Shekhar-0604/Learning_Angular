import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // constructor(private router: Router) {}
  // goToProfile() {
  //   this.router.navigate(['profile'], { queryParams: { name: 'shah' } });
  // }
  // users = [
  //   {
  //     id: '1',
  //     name: 'Shekhar Sharma',
  //     age: 21,
  //   },
  //   {
  //     id: '2',
  //     name: 'Abhishek Sharma',
  //     age: 22,
  //   },
  //   {
  //     id: '3',
  //     name: 'Ritik Sharma',
  //     age: 23,
  //   },
  // ];

  // name = new FormControl();
  // passwprd = new FormControl();

  // display() {
  //   console.log(this.name.value, this.passwprd.value);
  // }

  profileDetails = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });
  get name() {
    return this.profileDetails.get('name');
  }
  get password() {
    return this.profileDetails.get('password');
  }
  get email() {
    return this.profileDetails.get('email');
  }
  display() {
    console.log(this.profileDetails.value);
  }
  submitData() {}
}
