import { Component } from '@angular/core';
import {TaskService} from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Module1';
  addTaskColor = 'black';
  cursor= 'auto';

  constructor(private taskService: TaskService) {
    console.log(taskService.test);
  }

  changeColor(): void{
    this.addTaskColor = (  (this.addTaskColor === 'red') ? 'black' : 'red');
    this.cursor = (  (this.cursor === 'auto') ? 'pointer' : 'auto');

  }

}
