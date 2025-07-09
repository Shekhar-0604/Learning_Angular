import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'fifth-ng-app';
  // user = 'Shekhar';
  // userName = '';
  // onUserChange(val: string) {
  //   this.userName = val;
  // }
  // student = ['SHah', 'Zee', 'Zack', 'Jhon', 'Kel'];

  users: undefined | string[];

  HandleUsers(user: string[]) {
    console.log(user);
    this.users = user;
  }
}
