import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
    @Input() task!: Task;
    name!: string;
    description!: string;

    onSubmit() {
    }

    editTask(tak: Task) {
     console.log(this.task);
    }

    ngOnInit() : void {

    }

}
