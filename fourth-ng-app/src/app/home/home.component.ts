import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = [
    {
      id: '1',
      name: 'Shekhar Sharma',
      age: 21,
    },
    {
      id: '2',
      name: 'Abhishek Sharma',
      age: 22,
    },
    {
      id: '3',
      name: 'Ritik Sharma',
      age: 23,
    },
  ];
}
