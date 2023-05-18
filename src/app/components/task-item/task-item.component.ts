import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  onDelete(task: Task) {
    const confirmation = confirm("Are you sure you want to delete this entry?");
  if (confirmation) {
    this.onDeleteTask.emit(task);
  }
    
  }

  ngOnInit() : void {}
}
