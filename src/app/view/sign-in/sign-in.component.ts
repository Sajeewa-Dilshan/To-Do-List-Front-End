import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username='';
  password='';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  authenticate():void{
    this.userService.authenticate(this.username,this.password).subscribe(token=>{
      sessionStorage.setItem('token',token);
      sessionStorage.setItem('uname',this.username);

    },error => {
      this.username='';
      this.password='';

      }
    );
  }




}
