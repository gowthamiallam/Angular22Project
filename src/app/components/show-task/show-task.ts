import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../shared/task-service';

@Component({
  selector: 'app-show-task',
  imports: [],
  templateUrl: './show-task.html',
  styleUrl: './show-task.css',
})
export class ShowTask implements OnInit {
  taskList: string[] = ['task1', 'task2', 'task3'];
  taskService: TaskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);


  ngOnInit() {
    this.getTaskList();
  }

  //subscribe to the createTask Event emitter not the method in service 
  //subscriber1 in this component
  getTaskList() {
    this.taskService.createTasksubject.subscribe((val) => {
      console.log(val)
      console.log(this.taskList)
      this.taskList.push(val);
      this.cdr.detectChanges();
    })
  }

  //subscriber2 in another component use the same subject to get data subject allows multiple observers.

}
