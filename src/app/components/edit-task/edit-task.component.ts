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

    onSubmit() {
    }

    onToggle() {
        this.onToggleEditTask.emit();
    }

    editTask(tak: Task) {
     console.log(this.task);
    }


    ngOnInit() : void {

    }

}
