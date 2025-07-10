import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './service/products.service';
import { UsersService } from './service/users.service';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productsList: any;
  users: User[] = [];
  constructor(
    private productService: ProductsService,
    private userService: UsersService
  ) {}
  ngOnInit() {
    // this.productService.getProductsList().subscribe((data: any) => {
    //   console.log(data);

    //   this.productsList = data.products;
    // });
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }
}
