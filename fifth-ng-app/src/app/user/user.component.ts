import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() user: string = '';
  //   @Input() item: String = '';
  users = ['SHah', 'Zee', 'Zack', 'Jhon', 'Kel'];
  @Output() getUsers = new EventEmitter();

  loadData() {
    this.getUsers.emit(this.users);
  }
}
