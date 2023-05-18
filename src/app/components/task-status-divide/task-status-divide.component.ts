import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskStatus } from '../../TaskStatus';
import { TaskService } from 'src/app/services/task.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-task-status-divide',
  templateUrl: './task-status-divide.component.html',
  styleUrls: ['./task-status-divide.component.css'],
  providers: [TasksComponent],
})
export class TaskStatusDivideComponent implements OnInit {
  tasks: Task[] = [];
  taskStatus = TaskStatus;

  constructor(private tasksComponent: TasksComponent, private taskService: TaskService) {}

  filterTasksByStatus(status: TaskStatus) {
    const filteredTasks = this.tasksComponent.tasks.filter((task) => task.status === status);
    console.log("ASFASFASFASFFASFASFSAAFASFASFASFASFAF", filteredTasks); // Check the filtered tasks in the console
    return filteredTasks;
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

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    console.log('Tasks:', this.tasks);
  }
}
