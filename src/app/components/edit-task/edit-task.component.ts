import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
    @Output() onToggleEditTask: EventEmitter<void> = new EventEmitter();
    @Input() task!: Task;
    @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
    @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
    name!: string;
    description!: string;
    id!: string;
    timestamp!: Date;

    onSubmit() {
      if (!this.name) {
            alert("Please insert task name!");
            return;
          }

          const taskToEdit: Task = {
            name: this.name,
            description: this.description,
            status: this.task.status,
            id: this.task.id,
            timestamp: this.task.timestamp
          };

      this.onEditTask.emit(taskToEdit);
    }

    onToggle() {
        this.onToggleEditTask.emit();
    }

    onDelete(task: Task) {
      this.onDeleteTask.emit(task);
    }

    ngOnInit() : void {
      this.name = this.task.name;
      this.description = this.task.description;
      if (this.task.id) {
        this.id = this.task.id;
      }
    }

}
