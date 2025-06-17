import { Component } from '@angular/core';
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
  name = '';
  displayName = '';
  getName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    console.log(name);
    this.name = name;
  }
  setName() {
    this.displayName = 'Shah';
  }
  showName() {
    this.displayName = this.name;
  }

  email = '';

  getEmail(val: string) {
    this.email = val;
  }
  setEmail() {
    this.email = 'random@gmail.com';
  }
}
