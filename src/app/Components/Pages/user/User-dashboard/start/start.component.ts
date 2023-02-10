import Swal  from 'sweetalert2';
import { QuestionService } from './../../../../../Services/question.service';
import { ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

examId:any;
questions:any;
pointsObtained = 0;
correctAnswers = 0;
attempts = 0;

timer:any;
isSend = false;

  constructor(
    private locationSt:LocationStrategy,
    private route:ActivatedRoute,
    private questionService:QuestionService

  ){

  }


ngOnInit(): void {
  this.preventReturnButton();
  this.examId = this.route.snapshot.params['examId'];
  console.log(this.examId);
  this.loadQuestions();
}

loadQuestions(){
  this.questionService.listExamQuestionForQuiz(this.examId).subscribe(
    (data:any) =>{
      console.log(data);
      this.questions = data;

      this.timer = this.questions.length *2 *60;

      this.questions.forEach((q:any) => {
          q['answerChosen'] = '';
      })
      console.log(this.questions);
      this.startTimer();
    },
    (error) =>{
      console.log(error);
      Swal.fire('Error','Error loading questions from exam', 'error');
    }
  )
}

startTimer(){
  let t = window.setInterval(() =>{
    if(this.timer <= 0){
      this.examReview();
      clearInterval(t);
    }else{
      this.timer --;
    }
  },1000)
}


preventReturnButton(){
  history.pushState(null,null!,location.href);
  this.locationSt.onPopState(()=> {
    history.pushState(null,null!,location.href);
  })
}

sendQuiz(){
  Swal.fire({
    title:'You want to take the test?',
    showCancelButton:true,
    cancelButtonText:'Cancel',
    confirmButtonText: 'Send',
    icon:'info'
  }).then((e) => {
    if(e.isConfirmed){
      this.examReview();
    }
   })
  }

  getFormattedTime(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer  - mm*60;
    return `${mm} : min : ${ss} sec`;
  }

  examReview(){
    this.questionService.reviewExam(this.questions).subscribe(
      (data:any) => {
        this.pointsObtained = data.maximumPoints;
        this.correctAnswers = data.correctAnswers;
        this.attempts = data.attempts;
        this.isSend = true;
      },
      error =>{
        console.log(error);
      }
    )

   /* this.isSend = true;
      this.questions.forEach((q:any) => {
        if(q.answerChosen == q.answer){
          this.correctAnswers ++;
          let points = this.questions[0].exam.maximumPoints/this.questions.length;
          this.pointsObtained += points;
        }
        if(q.answerChosen.trim() != ''){
          this.attempts ++;
        }
      })
      console.log("Correct answer: " + this.correctAnswers);
      console.log("Points Obtained: " + this.pointsObtained);
      console.log("attemts: " + this.attempts);
      console.log(this.questions);*/
  }

  printPage(){
    window.print();
  }


}


