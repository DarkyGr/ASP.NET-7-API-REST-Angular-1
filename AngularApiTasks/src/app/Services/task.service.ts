import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Task } from '../Interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private endpoint: string = environment.endPoint;    // Get URL from environment
  private apiUrl: string = this.endpoint + "Task/";   // Concatenate the endPoint with the API

  constructor(private http:HttpClient) { }

  // Method to get Tasks List
  getList():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiUrl}List`)
  }

  // Method to Add New Task
  saveTask(request:Task):Observable<Task>{
    return this.http.post<Task>(`${this.apiUrl}Save`,request);
  }

  // Method to Delete Task
  deleteTask(task_id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}Delete/${task_id}`);
  }
}
