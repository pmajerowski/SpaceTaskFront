import { Component, Input } from '@angular/core';
import { TaskStatus } from './TaskStatus';
import { Task } from './Task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'spaceTask';
  status?: TaskStatus;

  TaskStatus = TaskStatus;

}
