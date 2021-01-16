import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  loadSignIn():void{
    this.routes.navigateByUrl('/sign-in');


  }

  loadSignUp():void{
    this.routes.navigateByUrl('/sign-up');

  }

}
