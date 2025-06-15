import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'second-ng-app';

  handleEvent(event: any) {
    console.log('Function Handle Event Called', event.type);
    //console.log('values', (event.target as HTMLInputElement).value);
  }
}
