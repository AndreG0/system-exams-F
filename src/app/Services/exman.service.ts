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

  public saveExam(exam:any){
    return this.http.post(`${baseUrl}/exam/create`, exam);
  }

  public deleteExam(examId:any){
    return this.http.delete(`${baseUrl}/exam/${examId}`)
  }

  public getExam(examId:any){
    return this.http.get(`${baseUrl}/exam/${examId}`);
  }

  public updateExam(exam:any){
    return this.http.put(`${baseUrl}/exam/update`, exam)
  }

  public listExamsByCategory(categoryId:any){
    return this.http.get(`${baseUrl}/exam/category/${categoryId}`);
  }

  public listExamActive(){
    return this.http.get(`${baseUrl}/exam/active`);
  }

  public listExamActiveByCategory(categoryId:any){
    return this.http.get(`${baseUrl}/exam/category/active/${categoryId}`);
  }

}
