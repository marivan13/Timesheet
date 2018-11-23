import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Ticket} from '@app/core/models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiService:ApiService) { }

  getTask(id:string){
    return this.apiService.get(`${this.apiService.ticket_path}/${id}`);
  }
  saveTask(task):Observable<Ticket>{
    if (task.Id) {
      console.log("Employee service");
      console.log(task);
       return this.apiService.put(`${this.apiService.ticket_path}/`, task)
      .pipe(map(data => data.task));
   }
   //add new employee
   else{
       return this.apiService.post(`${this.apiService.ticket_path}/`, task)
       .pipe(map(data => data.task));
   }
  }
  deleteTask(id:string){
    return this.apiService.delete(`${this.apiService.ticket_path}/${id}`);
  }

  getTimesheetsByTaskId(id:string){
    return this.apiService.getAll(`${this.apiService.ticket_path}/${id}/${this.apiService.timesheet_path}`);
  }
  searchTask(){}
}
