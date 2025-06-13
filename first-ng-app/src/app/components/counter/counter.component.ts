import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter = signal(0);
  increment() {
    this.counter.update((vl) => vl + 1);
  }
  decrement() {
    this.counter.update((vl) => {
      if (vl <= 0) {
        //vl = vl - 1;
        return 0;
      }
      return vl - 1;
    });
  }
  reset() {
    this.counter.update((vl) => 0);
  }
}
