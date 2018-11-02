import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Project} from '@app/core/models/project.model';
import {environment} from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public PROJECTS_API = `${environment.api}/projects`;
  public HEADER = new HttpHeaders().append('API_KEY', environment.api_key);

  constructor(private http:HttpClient) { }

  getAllProjects(): Observable<Array<Project>>{
    return this.http.get<Array<Project>>(this.PROJECTS_API, {headers: this.HEADER});
  }
}
