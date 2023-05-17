import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Task} from '../Task';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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


  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}?taskId=${task.id}`;
    return this.http.delete<Task>(url);
  }
}
