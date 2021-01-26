import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {

  @Output()
  cancel=new EventEmitter();
  @Output()
  update= new EventEmitter();
  @ViewChild('txt')
  txt !: ElementRef;

  @Input()
  taskText!:string;
  @Output()
  taskTextChange=new EventEmitter();

  @Input()
  newTask=true;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    (this.txt.nativeElement as HTMLInputElement).focus();
  }

}
