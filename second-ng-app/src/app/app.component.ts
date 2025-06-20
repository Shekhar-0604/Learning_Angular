import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'second-ng-app';
  // handleEvent(event: any) {
  //   console.log('Function Handle Event Called', event.type);
  //   //console.log('values', (event.target as HTMLInputElement).value);
  // }
  // name = '';
  // displayName = '';
  // getName(event: Event) {
  //   const name = (event.target as HTMLInputElement).value;
  //   console.log(name);
  //   this.name = name;
  // }
  // setName() {
  //   this.displayName = 'Shah';
  // }
  // showName() {
  //   this.displayName = this.name;
  // }
  // email = '';
  // getEmail(val: string) {
  //   this.email = val;
  // }
  // setEmail() {
  //   this.email = 'random@gmail.com';
  // }
  // display = true;
  // displayToggle = true;
  // hide() {
  //   this.display = false;
  // }
  // show() {
  //   this.display = true;
  // }
  // Toggle() {
  //   this.displayToggle = !this.displayToggle;
  // }
  // control = 1;
  // setNumber(event: number) {
  //   console.log(event);
  //   this.control = event;
  // }
  // inputBox(event: string) {
  //   const number = parseInt(event);
  //   console.log(number);
  //   this.control = number;
  // }
  // users = ['Shah', 'Kelvin', 'oreon', 'Jack'];
  // student = [
  //   { name: 'Shekhar', age: 23, email: 'shekhar@test.com' },
  //   { name: 'shah', age: 23, email: 'shah@test.com' },
  //   { name: 'Kelvin', age: 23, email: 'Kelvin@test.com' },
  //   { name: 'Joy', age: 23, email: 'Joy@test.com' },
  //   { name: 'roy', age: 23, email: 'roy@test.com' },
  // ];
  // count = signal(10);
  // updateValue(val: string) {
  //   if (val == 'inc') this.count.set(this.count() + 1);
  //   if (val == 'dec') this.count.set(this.count() - 1);
  // }
  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());

  updateValue() {
    console.log(this.z());
    this.x.set(200);
    console.log(this.z());
  }
}
