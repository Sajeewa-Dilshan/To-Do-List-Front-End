import {Priority} from '../util/priority.enum';

export class Task {

  constructor(public id : number|null,public  text: string ,public  priority : Priority, public  completed: boolean, public username: string) {

  }
}

