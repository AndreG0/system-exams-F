import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from './../../../../Services/question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-view-exam-questions',
  templateUrl: './view-exam-questions.component.html',
  styleUrls: ['./view-exam-questions.component.css']
})
export class ViewExamQuestionsComponent implements OnInit{

    examId: any;
    title:any;
    questions:any =[];


  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private snack:MatSnackBar){}

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.title = this.route.snapshot.params['title'];
   this.questionService.listQuestionsByExam(this.examId).subscribe(
    (data: any) => {
      console.log(data);
      this.questions = data;
    },
    error => {
      console.log(error);
    }
   )
  }

  deleteQuestion(questionId:any){
    Swal.fire({
      title: 'Delete Question',
      text: 'Are you sure you want to delete this question',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result)=>{
      if(result.isConfirmed){
        this.questionService.deleteQuestion(questionId).subscribe(
          data => {
            this.snack.open('Question deleted successfully','',{
              duration: 3000
            })
          this.questions = this.questions.filter((question:any) => question.questionId != questionId);
          },
          error => {
            this.snack.open('Error deleting question','',{
              duration: 3000
            })
            console.log(error);
          }
        )
      }
    })
  }

}
