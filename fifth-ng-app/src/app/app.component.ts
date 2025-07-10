import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { NgIf } from '@angular/common';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, CurrencyConverterPipe, NgIf],
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
  // users: undefined | string[];
  // HandleUsers(user: string[]) {
  //   console.log(user);
  //   this.users = user;
  // }

  // amount = 10;

  // onUpdateCount() {
  //   this.amount = this.amount + 1;
  // }
  productData:
    | {
        name: string;
        Id: number;
      }[]
    | undefined;
  constructor(private productService: ProductService) {}

  getProductData() {
    this.productData = this.productService.getProductData();
    console.log(this.productData);
  }
}
