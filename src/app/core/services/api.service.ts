import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

//import { JwtService } from './jwt.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  public headers = new HttpHeaders()
  .append('API_KEY', environment.api_key)
  .append('Access-Control-Allow-Origin', '*');

  public timesheet_path = '/timesheet';
  public employee_path = '/employees';
  public project_path = '/projects';
  public ticket_path = '/tasks';
  public skill_path = '/skills';
  public team_path = '/team';

  public queryParams: {
    projectId?:number,
    key?:string
  }

  public header_key = new HttpHeaders().append('API_KEY', environment.api_key);

  constructor( private http:HttpClient) {}

  getAll(path: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.api}${path}`, {headers: this.headers})
      .pipe(catchError(this.formatErrors));
  }

  get(path: string) {
    return this.http.get(`${environment.api}${path}`, {headers: this.headers})
      .pipe(catchError(this.formatErrors));
  }

  search(path: string, query: Object = {}): Observable<Array<any>> {
    const params = {};
    Object.keys(query)
    .forEach((key)=>{ params[key] = query[key]});
    return this.http.get<Array<any>>(`${environment.api}${path}/search`, {headers: this.headers, params: new HttpParams({fromObject:params})});
  } 

  
  put(path:string, body:Object = {} ):Observable<any>{
      return this.http.put(`${environment.api}${path}`, body, 
      {headers: this.headers}).pipe(catchError(this.formatErrors));
  }

  
  post(path:string, body:Object = {} ):Observable<any>{
    return this.http.post(`${environment.api}${path}`,body, 
    {headers: this.headers}).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api}${path}`, {headers: this.headers})
      .pipe(catchError(this.formatErrors));
  }

  getParamsFromQuery(queryParams):HttpParams{
    let params = {};
    Object.keys(queryParams)
    .forEach((key)=>{ params[key] = queryParams[key]});
    return new HttpParams({fromObject:params});
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }


}
