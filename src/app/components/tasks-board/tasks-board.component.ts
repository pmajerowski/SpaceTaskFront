import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskStatus } from "../../TaskStatus";
import {Task} from "../../Task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.css']
})
export class TasksBoardComponent implements OnInit {
  tasks: Task[] = [];
  @Input() tasksFilter!: TaskStatus;
  @Output() tasksUpdated: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  protected readonly TaskStatus = TaskStatus;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe();
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }


  filterTasks(tasks: Task[]) {
    return tasks.filter(item => item.status === this.tasksFilter);
  }

  handleTasksUpdated(updatedTasks: Task[]) {
    switch (this.tasksFilter) {
      case TaskStatus.TO_DO:
        this.tasks = this.filterTasksAdded(updatedTasks, TaskStatus.TO_DO);
        break;
      case TaskStatus.IN_PROGRESS:
        this.tasks = this.filterTasksAdded(updatedTasks, TaskStatus.IN_PROGRESS);
        break;
      case TaskStatus.DONE:
        this.tasks = this.filterTasksAdded(updatedTasks, TaskStatus.DONE);
        break;
      default:
        break;
    }
  }

  filterTasksAdded(tasks: Task[], filter: TaskStatus) {
    return tasks.filter(item => item.status === filter);
  }

}
