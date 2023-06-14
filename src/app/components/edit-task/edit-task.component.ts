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
    name!: string;
    description!: string;
    id!: string;

    onSubmit() {
    }

    onToggle() {
        this.onToggleEditTask.emit();
    }


    onDelete(task: Task) {
      console.log(task.id)
    }


    ngOnInit() : void {
      this.name = this.task.name;
      this.description = this.task.description;
      if (this.task.id) {
        this.id = this.task.id;
      }
    }

}
