import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { map } from 'rxjs/operators';
import {Timesheet} from 'app/core/models/timesheet.model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private apiService:ApiService) { }

  getTimesheet(id:string){
    return this.apiService.get(`${this.apiService.timesheet_path}/${id}`);
  }

  saveTimesheet(timesheet):Observable<Timesheet> {
    //update existing timesheet
    if (timesheet.Id) {
       console.log("Employee service");
       console.log(timesheet);
        return this.apiService.put(`${this.apiService.timesheet_path}/`, timesheet)
       .pipe(map(data => data.timesheet));
    }
    //add new timesheet
    else{
        return this.apiService.post(`${this.apiService.timesheet_path}/`, timesheet)
        .pipe(map(data => data.timesheet));
    }
  }

  deleteTimesheet(id:string){
    console.log("delete");
    console.log(id);
    return this.apiService.delete(`${this.apiService.timesheet_path}/${id}`);
  }

  searchTimesheet(){}


}
