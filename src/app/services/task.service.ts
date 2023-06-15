import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Task} from '../Task';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Task[]>(url)
  }

  deleteTask(task: Task): Observable<void> {
      const url = `${this.apiUrl}?taskId=${task.id}`;
      console.log(url);
      return this.http.delete<void>(url);
    }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl, task, httpOptions);
  }
}
