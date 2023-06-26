import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks';
  private httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.httpOptions = {
      headers: this.getHeadersWithAuthorization()
    };
  }

  getTasks(): Observable<Task[]> {
    console.log("GET TASKS FROM SERVICE")
    const url = `${this.apiUrl}/all`;
    return this.http.get<Task[]>(url, this.httpOptions);
  }

  deleteTask(task: Task): Observable<void> {
    const url = `${this.apiUrl}?taskId=${task.id}`;
    return this.http.delete<void>(url, this.httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, this.httpOptions);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl, task, this.httpOptions);
  }

  private getHeadersWithAuthorization(): HttpHeaders {
    const token = this.localStorage.get('jwt-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
