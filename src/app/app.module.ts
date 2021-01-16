import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaskService} from './service/task.service';
import { WelcomeComponent } from './view/welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { MainComponent } from './view/main/main.component';

const routes : Routes=[
  {
    path:'',
  pathMatch:'full',
    redirectTo: '/welcome'
  },
  {
    path: 'main',
    component: MainComponent,

  }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    SignInComponent,
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
