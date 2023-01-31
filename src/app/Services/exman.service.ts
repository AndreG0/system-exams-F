import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExmanService {

  constructor(private http:HttpClient) { }

  public listExams(){
    return this.http.get(`${baseUrl}/exam/list`)
  }
}
