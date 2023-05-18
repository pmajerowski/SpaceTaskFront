import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksInProgressComponent } from './tasks-in-progress.component';

describe('TasksInProgressComponent', () => {
  let component: TasksInProgressComponent;
  let fixture: ComponentFixture<TasksInProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksInProgressComponent]
    });
    fixture = TestBed.createComponent(TasksInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
