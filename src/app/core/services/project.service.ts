import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Project} from '@app/core/models/project.model';
import { map } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private apiService:ApiService) { }

  getAllProjects(): Observable<Array<Project>>{
    return this.apiService.getAll(this.apiService.project_path);
  }

  getProject(id:string){
    return this.apiService.get(`${this.apiService.project_path}/${id}`);
  }

  saveProject(project):Observable<Project>
  {
    if (project.Id){
      return this.apiService.put(`${this.apiService.project_path}/`, project)
      .pipe(map(data => data.project));
    }
    else{
      return this.apiService.post(`${this.apiService.project_path}/`, project)
        .pipe(map(data => data.project));
    }
  }

  deleteProject(id:string){
    return this.apiService.delete(`${this.apiService.project_path}/${id}`); 
  }

  getTicketsByProjectId(id:string){
    return this.apiService.getAll(`${this.apiService.project_path}/${id}/${this.apiService.ticket_path}`);
  }

  searchProject(){}


}
