import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  task = '';
  taskList: { id: number; task: string }[] = [];
  addTask() {
    const len = this.taskList.length;
    if (this.task !== '') this.taskList.push({ id: len + 1, task: this.task });
    this.task = '';
    console.log(this.taskList);
  }
  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskId);
  }
}
