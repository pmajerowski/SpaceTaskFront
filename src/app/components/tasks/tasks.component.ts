import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';
import { TaskStatus } from '../../TaskStatus';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnChanges {
  @Input() tasks: Task[] = [];
  @Input() tasksFilter!: TaskStatus;

  @Output() tasksUpdated: EventEmitter<Task[]> = new EventEmitter<Task[]>();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onMoveToInProgress: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onMoveToToDo: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onMoveToDone: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  ngOnChanges(changes: SimpleChanges): void {
      this.tasks = this.filterTasks(changes['tasks'].currentValue);
      this.tasksUpdated.emit(this.tasks);
  }

  moveToInProgress(task: Task) {
    this.onMoveToInProgress.emit(task);
  }

  moveToToDo(task: Task) {
    this.onMoveToToDo.emit(task);
  }

  moveToDone(task: Task) {
    this.onMoveToDone.emit(task);
  }

  editTask(task: Task) {
    this.onEditTask.emit(task);
  }

  filterTasks(tasks: Task[]) {
    return tasks.filter(item => item.status === this.tasksFilter);
  }
}
