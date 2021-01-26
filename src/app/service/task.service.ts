import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {Priority} from '../util/priority.enum';
import {Status} from '../util/status.enum';

@Injectable(
  /*{providedIn: 'root'}*/
)


export class TaskService {

  taskList: Array<Task> = [];

  constructor() {
  this.taskList.push(new Task(1,"complte angular",Priority.PRIORITY1, Status.NOT_COMPLETED, "sdk"));
  this.taskList.push(new Task(1,"complte js",Priority.PRIORITY1, Status.NOT_COMPLETED, "sdk"));
  this.taskList.push(new Task(1,"complte layred",Priority.PRIORITY1, Status.NOT_COMPLETED, "sdk"));
  this.taskList.push(new Task(1,"complte todo backend",Priority.PRIORITY1, Status.NOT_COMPLETED, "sdk"));

  }
}
