import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Taskular');
}