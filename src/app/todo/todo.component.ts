import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';
  
  tasksPending: string[] = [];
  tasksInProgress: string[] = [];
  tasksCompleted: string[] = [];

  addTask() {
    if(this.newTask.trim() !== '') {
      this.tasksPending.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  moveToInProgress(index: number) {
    const task = this.tasksPending.splice(index, 1)[0];
    this.tasksInProgress.push(task);
  }

  moveToCompleted(index: number) {
    const task = this.tasksInProgress.splice(index, 1)[0];
    this.tasksCompleted.push(task);
  }

  removeTask(array: string[], index: number) {
    array.splice(index, 1);
  }
}