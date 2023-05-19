import { Component, OnInit, Input, Output } from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';
import { TaskStatus } from '../../TaskStatus';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Input() tasksFilter!: TaskStatus;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = this.filterTasks(tasks)));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  // addTask(task: Task) {
  //   this.tasks.push(task);
  //   this.taskService.addTask(task).subscribe();
  // }

  filterTasks(tasks: Task[]) {
    return tasks.filter(item => item.status === this.tasksFilter);
  }
}
