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
  toggleEditTask: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
      this.tasks = this.filterTasks(changes['tasks'].currentValue);
      this.tasksUpdated.emit(this.tasks);

  }

  constructor(private taskService: TaskService) {}

  deleteTask(task: Task) {
//     this.taskService.deleteTask(task).subscribe(() => {
//       this.tasks = this.tasks.filter((t) => t.id !== task.id);
//       this.tasksUpdated.emit(this.tasks);
//     });
    console.log(this.toggleEditTask);
    console.log("KURCZACZEK");
    this.toggleEditTask = !this.toggleEditTask;
    console.log(this.toggleEditTask);
  }


  filterTasks(tasks: Task[]) {
    return tasks.filter(item => item.status === this.tasksFilter);
  }
}
