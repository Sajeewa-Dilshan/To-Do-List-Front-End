import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';
import {Task} from '../../model/task';
import {Status} from '../../util/status.enum';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'Module1';
  addTaskColor = 'black';
  cursor = 'auto';

  taskList: Array<Task>=[];
  Status=Status;
  visibleTaskEditor=false;
  currentTask:Task|null=null;


  ngOnInit(): void {
    // this.taskService.getAllTasks().subscribe(list=>{this.taskList=list;},error=>{
    //   this.router.navigateByUrl('/sign-in');
    // });
  }

  constructor(public taskService: TaskService,private  router: Router) {
    //console.log(taskService.test);
  }

  changeColor(): void{
    this.addTaskColor = (  (this.addTaskColor === 'red') ? 'black' : 'red');
    this.cursor = (  (this.cursor === 'auto') ? 'pointer' : 'auto');

  }

  signOut():void{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('uname');
    this.router.navigateByUrl('/welcome');
  }


  editTask(task: Task){
    this.currentTask=task;
    this.visibleTaskEditor=true;
  }


  addNewTask(taskDescription: string) {
    this.taskService.saveTask(taskDescription).subscribe(task=>{
      this.taskList.push(task);
      this.visibleTaskEditor=false;
    },error=>{
      if(error instanceof HttpErrorResponse ){
        alert("Please try again something went wrong");
      }else{
        this.router.navigateByUrl('/sign-in');
      }
    });

  }
}
