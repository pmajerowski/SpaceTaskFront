import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();

  showEditTask: boolean = false;
  subscription!: Subscription;
  faTimes = faTimes;

  constructor(private uiService: UiService) {

  }

  onDelete(task: Task) {
    const confirmation = confirm("Are you sure you want to delete this entry?");
    if (confirmation) {
      this.onDeleteTask.emit(task);
    }
  }

  onEdit(task: Task) {
    this.uiService.toggleEditTask(task);
//     this.onEditTask.emit(task);
  }

  ngOnInit() : void {}
}


