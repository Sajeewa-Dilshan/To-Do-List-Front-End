import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'Module1';
  addTaskColor = 'black';
  cursor = 'auto';

  ngOnInit(): void {
  }

  constructor(public taskService: TaskService) {
    //console.log(taskService.test);
  }

  changeColor(): void{
    this.addTaskColor = (  (this.addTaskColor === 'red') ? 'black' : 'red');
    this.cursor = (  (this.cursor === 'auto') ? 'pointer' : 'auto');

  }

}