import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskStatus } from '../../TaskStatus';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  @Output() onMoveToInProgress: EventEmitter<Task> = new EventEmitter();
  @Output() onMoveToToDo: EventEmitter<Task> = new EventEmitter();
  @Output() onMoveToDone: EventEmitter<Task> = new EventEmitter();

  toDo: TaskStatus = TaskStatus.TO_DO;
  inProgress: TaskStatus = TaskStatus.IN_PROGRESS;
  done: TaskStatus = TaskStatus.DONE;

  isExpanded: boolean = false;
  faTimes = faTimes;

  constructor(private elementRef: ElementRef) { }

  onEdit(task: Task) {
    this.onEditTask.emit(task);
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
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

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
    }
  }
}
