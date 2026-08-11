import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../shared/task-service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  newTask: string = '';
  taskService: TaskService = inject(TaskService);

  onCreateNewTask() {
    console.log(this.newTask);
    this.taskService.onCreateTaskMethod(this.newTask);

  }
}
