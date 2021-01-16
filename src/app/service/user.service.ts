import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authenticate(uname:string,pwd: string): Observable<any>{
    const body={
      username:uname,
      password:pwd
    };

    return this.http.post(`http://localhost:8080/todoapp/api/v1/auth`,body,{
      responseType: 'text'
    });




}
}
