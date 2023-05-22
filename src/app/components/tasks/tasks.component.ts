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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks'] || changes['tasksFilter']) {
      this.tasks = this.filterTasks(changes['tasks'].currentValue);
      this.tasksUpdated.emit(this.tasks);
    }
  }
  

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = this.filterTasks(tasks)));
  }


  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
      this.tasksUpdated.emit(this.tasks);
    });
  }
  

  filterTasks(tasks: Task[]) {
    return tasks.filter(item => item.status === this.tasksFilter);
  }
}
