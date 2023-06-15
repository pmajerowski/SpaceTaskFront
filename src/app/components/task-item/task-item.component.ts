import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  isExpanded: boolean = false;
  @Input() task!: Task;
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor(private elementRef: ElementRef) { }

  onEdit(task: Task) {
    this.onEditTask.emit(task);
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
    }
  }

  ngOnInit(): void { }
}
