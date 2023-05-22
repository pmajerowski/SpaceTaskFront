import {Component, Input, Output} from '@angular/core';
import { TaskStatus } from "../../TaskStatus";
import {Task} from "../../Task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.css']
})
export class TasksBoardComponent {
  tasks: Task[] = [];
  @Input() tasksFilter!: TaskStatus;

  protected readonly TaskStatus = TaskStatus;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.taskService.addTask(task).subscribe();
    
  }

  filterTasks(tasks: Task[]) {
    return tasks.filter(item => item.status === this.tasksFilter);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
