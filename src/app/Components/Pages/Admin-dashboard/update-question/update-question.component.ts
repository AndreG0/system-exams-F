import  Swal  from 'sweetalert2';
import { QuestionService } from './../../../../Services/question.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  questionId:any = 0;
  question:any;
  exam:any; 

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private questionService:QuestionService
    ){}


    ngOnInit(): void {
      this.questionId = this.route.snapshot.params['questionId'];
      this.questionService.getQuestion(this.questionId).subscribe(
        (data:any) => {
          this.question = data;
          console.log(this.question);
        },
        (error) => {
          console.log(error);
        }
      )
    }

    public updateQuestion(){
      this.questionService.updateQuestion(this.question).subscribe(
        (data) => {
          Swal.fire('Update question','The question has been updated successfully','success').then((exam) => {
          this.router.navigate(['/admin/view-questions/'+this.question.exam.examId+'/'+this.question.exam.title]);
          })
        }
      )
    }

  }
