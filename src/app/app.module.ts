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
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TaskItemComponent } from './view/task-item/task-item.component';
import { TaskEditorComponent } from './view/task-editor/task-editor.component';

const routes : Routes=[
  {
    path:'',
  pathMatch:'full',
    redirectTo: '/welcome'
  },
  {
    path: 'main',
    component: MainComponent,

  },{
    component: WelcomeComponent,
    path: 'welcome'},
  {component:SignInComponent,
  path: 'sign-in'},
  {
    component:SignUpComponent,
    path:'sign-up'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    SignInComponent,
    NotFoundComponent,
    MainComponent,
    TaskItemComponent,
    TaskEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
