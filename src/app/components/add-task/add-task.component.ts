import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TaskStatus } from '../../TaskStatus';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  name!: string;
  description!: string;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit() : void {}

  onSubmit() {
    if (!this.name) {
      alert("Please insert task name!");
      return;
    }
    
    const newTask: Task = {
      name: this.name,
      description: this.description,
      status: TaskStatus.TO_DO
    };

    this.onAddTask.emit(newTask);

    this.name = '';
    this.description = '';
  }

}
