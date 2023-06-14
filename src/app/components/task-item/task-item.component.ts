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
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  onEdit(task: Task) {
    this.onEditTask.emit(task);
  }

  ngOnInit() : void {}
}


