import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public listQuestionsByExam(examId: any){
    return this.http.get(`${baseUrl}/question/exam/all/${examId}`);
  }

  public saveQuestion(question: any){
    return this.http.post(`${baseUrl}/question/create`,question);
  }

  public deleteQuestion(questionId: any){
   return this.http.delete(`${baseUrl}/question/${questionId}`);
  }

  public updateQuestion(question: any){
    return this.http.put(`${baseUrl}/question/update`, question);
  }

  public getQuestion(questionId: any){
    return this.http.get(`${baseUrl}/question/${questionId}`);
  }

  public listExamQuestionForQuiz(examId:any){
    return this.http.get(`${baseUrl}/question/exam/all/${examId}`);
  }

  public reviewExam(questions:any){
    return this.http.post(`${baseUrl}/question/review-exam`,questions);
  }

}
