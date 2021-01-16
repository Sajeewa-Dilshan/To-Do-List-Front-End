import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {Priority} from '../util/priority.enum';

@Injectable(
  /*{providedIn: 'root'}*/
)


export class TaskService {

  taskList: Array<Task> = [];

  constructor() {
    this.taskList.push(new Task('Requirement Elicitation', false, Priority.PRIORITY1));
    this.taskList.push(new Task('UI design', true, Priority.PRIORITY4));
    this.taskList.push(new Task('Back end design', true, Priority.PRIORITY2));
    this.taskList.push(new Task('shopping', false, Priority.PRIORITY1));
    this.taskList.push(new Task('Home work', false, Priority.PRIORITY3));

  }
}
