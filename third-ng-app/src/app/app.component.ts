import {
  CommonModule,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'third-ng-app';
  show = true;
  user = ['Amit', 'Shah'];
  nSwit = 'A';
}
