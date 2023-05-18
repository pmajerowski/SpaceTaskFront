import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusDivideComponent } from './task-status-divide.component';

describe('TaskStatusDivideComponent', () => {
  let component: TaskStatusDivideComponent;
  let fixture: ComponentFixture<TaskStatusDivideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskStatusDivideComponent]
    });
    fixture = TestBed.createComponent(TaskStatusDivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
