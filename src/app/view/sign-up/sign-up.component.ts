import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  username: any;
  password: any;
  userExist=false;

  constructor(private  userService:UserService,private router: Router) {

  }

  ngOnInit(): void {
  }

  createAccount():void{
    this.userService.createAccount(this.username,this.password).subscribe(value => {
      this.router.navigateByUrl("/sign-in");
      },error => {
      if(error.status===400){
          console.log("error success");
      }else{
        console.log("error failed");
      }
      }
    );
  }


  findUser():void {

    this.userService.findUser(this.username).subscribe(value => {
      this.userExist=true;
    },error => {
      this.userExist=false;
    });
  }
}
