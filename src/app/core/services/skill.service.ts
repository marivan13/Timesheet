import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Skill} from '@app/core/models/skill.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private apiService:ApiService) { }

  getAllSkills():Observable<Array<Skill>>{
    return this.apiService.getAll(this.apiService.skill_path);
  }

  saveSkill(skill):Observable<Skill>{
    if (skill.Id) {
      console.log("Employee service");
      console.log(skill);
       return this.apiService.put(`${this.apiService.skill_path}/`, skill)
      .pipe(map(data => data.skill));
   }
   //add new employee
   else{
       return this.apiService.post(`${this.apiService.skill_path}/`, skill)
       .pipe(map(data => data.skill));
   }
  }

  deleteSkill(params){
    return this.apiService.delete(`${this.apiService.skill_path}`, params);
  }

  getSkillsForEmployee(employeeId:string):Observable<Array<Skill>>{
    return this.apiService.getAll(`${this.apiService.skill_path}/${employeeId}`);
  }
}
