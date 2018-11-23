import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {Team} from 'app/core/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private apiService:ApiService) { }

  getTeamByProjectId(projectId: string){
    return this.apiService.get(`${this.apiService.team_path}/${projectId}`);
  }

  addEmployeeToTeam(team):Observable<Team>{
    return this.apiService.post(`${this.apiService.team_path}`, team)
    .pipe(map(data => data.team));

  }
  deleteEmployeeFromTeam(params){
    return this.apiService.delete(`${this.apiService.team_path}`, params);
  }

}
