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

  

  put(path:string, body:Object = {} ):Observable<any>{
      return this.http.put(`${environment.api}${path}`, body, 
      {headers: this.headers}).pipe(catchError(this.formatErrors));
  }

  
  post(path:string, body:Object = {} ):Observable<any>{
    return this.http.post(`${environment.api}${path}`, JSON.stringify(body), 
    {headers: this.headers}).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api}${path}`, {headers: this.headers})
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }
}
