import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {Priority} from '../util/priority.enum';
import {Status} from '../util/status.enum';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable(
  /*{providedIn: 'root'}*/
)


export class TaskService {



  taskList: Array<Task> = [];

  constructor(private http: HttpClient) {
  this.taskList.push(new Task(1,"complte angular",Priority.PRIORITY1, Status.NOT_COMPLETED, "sdk"));
  this.taskList.push(new Task(1,"complte js",Priority.PRIORITY1, Status.NOT_COMPLETED, "sdk"));
  this.taskList.push(new Task(1,"complte layred",Priority.PRIORITY1, Status.NOT_COMPLETED, "sdk"));
  this.taskList.push(new Task(1,"complte todo backend",Priority.PRIORITY1, Status.NOT_COMPLETED, "sdk"));

  }


  getAllTasks():Observable<Array<Task>> {
    const token= sessionStorage.getItem('token');
    if(token===null){
      return throwError('Invalidtoken');
    }else{
      return this.http.get<Array<Task>>(`http://localhost:8080/todoapp/api/v1/items`, {
        headers: new HttpHeaders().append('Authorization', `Bearer${token}`)
      });
      }
    }


  saveTask(taskDescription :string): Observable<Task> {
    const token= sessionStorage.getItem('token');
    const uname= sessionStorage.getItem('uname') as string;
    if(token ==null|| uname==null){
      return throwError("invalid username or token");

    }
    const newTask= new Task(null,taskDescription,Priority.PRIORITY1, Status.NOT_COMPLETED, uname);

    return this.http.post<Task>(`http://localhost:8080/todoapp/api/v1/items`,newTask,{
      headers: new HttpHeaders().append('Authorization',`Bearer${token}`)
    });

  }
}
