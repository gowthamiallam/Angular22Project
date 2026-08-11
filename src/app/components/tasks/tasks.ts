import { Component } from '@angular/core';
import { NewTask } from '../new-task/new-task';
import { ShowTask } from '../show-task/show-task';

@Component({
  selector: 'app-tasks',
  imports: [NewTask,ShowTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {}
