import Swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ExmanService } from './../../../../../Services/exman.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  examId:any;
  exam:any = new Object();

  constructor(
    private exmanService:ExmanService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    this.examId = this.route.snapshot.params['examId'];
    this.exmanService.getExam(this.examId).subscribe(
      (data:any) => {
        console.log(data);
        this.exam = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }


  startExam(){
    Swal.fire({
      title: 'You want to start the exam?',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Start',
      icon:'info'
    }).then((result:any) => {
      if(result.isConfirmed){
        this.router.navigate(['/start/'+this.examId]);
      }
    })
  }
}
