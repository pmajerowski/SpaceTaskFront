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
  @Output() taskEdit: EventEmitter<Task> = new EventEmitter();
  toggleEditTask: boolean = false;
  currentlyEditedTask!: Task;

  protected readonly TaskStatus = TaskStatus;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => {
          this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
        });
  }

  toggleEdit() {
    this.toggleEditTask = !this.toggleEditTask;
  }

  editTask(task: Task) {
    this.toggleEditTask = !this.toggleEditTask;
    this.currentlyEditedTask = task;
  }

  editTaskSubmit(task: Task) {
    this.taskService.editTask(task).subscribe(() => {
              this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
            });
    this.toggleEdit();
  }

  deleteTask(task: Task) {
    const confirmation = confirm("Are you sure you want to delete this task?");
      if (confirmation) {
        console.log(task);
        this.taskService.deleteTask(task).subscribe(() => {
           this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
         });
         this.toggleEdit();
      }
  }

  moveToInProgressFunction(task: Task) {
    this.changeStatus(task, TaskStatus.IN_PROGRESS);
  }

  moveToToDoFunction(task: Task) {
    this.changeStatus(task, TaskStatus.TO_DO);
  }

  moveToDoneFunction(task: Task) {
      this.changeStatus(task, TaskStatus.DONE);
    }

  filterTasks(tasks: Task[]) {
    return tasks.filter(item => item.status === this.tasksFilter);
  }


  filterTasksAdded(tasks: Task[], filter: TaskStatus) {
    return tasks.filter(item => item.status === filter);
  }

  changeStatus(task: Task, taskStatus: TaskStatus) {
    const editedTask: Task = {
              id: task.id,
              name: task.name,
              description: task.description,
              status: taskStatus,
              timestamp: task.timestamp
            };
        this.taskService.editTask(editedTask).subscribe(() => {
                      this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
                    });
  }

}
