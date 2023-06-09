import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Task} from '../Task';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private showEditTask: boolean = false;
  private subject = new Subject<any>;

  constructor() { }

  toggleAddTask() : void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggleEditTask(task : Task) : void {
    this.showEditTask = !this.showEditTask;
    this.subject.next(this.showEditTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
