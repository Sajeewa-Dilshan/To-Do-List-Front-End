import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username='';
  password='';
  @ViewChild('txtUsername')
  txtUsername!: ElementRef;
  @ViewChild('frm')
  frmSignIn!:NgForm;


  constructor(private userService: UserService,private  router:Router) { }

  ngOnInit(): void {
  }

  authenticate():void{
    this.userService.authenticate(this.username,this.password).subscribe(token=>{
      sessionStorage.setItem('token',token);
      sessionStorage.setItem('uname',this.username);
      this.router.navigateByUrl("/main");

    },error => {
      this.username='';
      this.password='';
      this.frmSignIn.reset();
      (this.txtUsername.nativeElement as HTMLInputElement).focus();


      }
    );
  }




}
