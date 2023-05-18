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
  @Input() @Output() tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    console.log("tasksssssssss: ", this.tasks)
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.taskService.addTask(task).subscribe();
  }

  filterTasksByStatus(status: TaskStatus) {
    return this.tasks.filter((task) => task.status === status);
  }


}
