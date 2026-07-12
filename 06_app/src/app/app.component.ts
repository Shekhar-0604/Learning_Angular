import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from './service/products.service';
import { UsersService } from './service/users.service';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productsList: any;
  users: User[] = [];
  selectedUser: User | undefined;
  constructor(
    private productService: ProductsService,
    private userService: UsersService
  ) {}
  ngOnInit() {
    // this.productService.getProductsList().subscribe((data: any) => {
    //   console.log(data);
    //   this.productsList = data.products;
    // });
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

  addUser(user: User) {
    if (!this.selectedUser) {
      this.userService.saveUsers(user).subscribe((data: User) => {
        if (data) {
          this.getUser();
        }
      });
    } else {
      const userData = { ...user, id: this.selectedUser.id };
      this.userService.updatedUser(userData).subscribe((data: User) => {
        console.log('Updated User: ', data);
        this.getUser();
      });
    }
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: User) => {
      console.log(data);
      if (data) {
        this.getUser();
      }
    });
  }
  selectUser(id: string) {
    this.userService.getSelectedUsers(id).subscribe((data: User) => {
      this.selectedUser = data;
    });
  }
}
