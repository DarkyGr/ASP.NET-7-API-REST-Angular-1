import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from './Interfaces/task';
import { TaskService } from './Services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular Api Tasks';

  tasksList: Task[] = [];
  taskForm: FormGroup;

  constructor(
    private _taskService: TaskService,
    private fb:FormBuilder
  ){
    this.taskForm = this.fb.group({
      name:['',Validators.required]     // Filds of form
    });
  }

  // Method to Get Tasks List
  getTasks(){
    this._taskService.getList().subscribe({     // Subscribe is form get data
      next:(data) =>{
        this.tasksList = data;
      },error:(e)=>{
        console.log(e);
      }
    });
  }

  // Method to Initialize the App (Default)
  ngOnInit(): void {
    this.getTasks();
  }

  // Method to Add new Task
  saveTask(){
    const request:Task ={
      task_id: 0,
      task_name: this.taskForm.value.name
    }

    this._taskService.saveTask(request).subscribe({     // Subscribe is form get data
      next:(data) =>{
        this.tasksList.push(data);    // Add new Task to List
        this.taskForm.patchValue({
          name:""
        });
      },error:(e)=>{
        console.log(e);
      }
    });
  }

  // Method to Delete Task
  deleteTask(task:Task){
    this._taskService.deleteTask(task.task_id).subscribe({     // Subscribe is form get data
      next:(data) =>{
        const newList = this.tasksList.filter(item => item.task_id != task.task_id)     // Discard the deleted task
        this.tasksList = newList;
      },error:(e)=>{
        console.log(e);
      }
    });
  }
}
