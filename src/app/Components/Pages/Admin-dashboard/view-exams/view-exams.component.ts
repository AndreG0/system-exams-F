import Swal from 'sweetalert2';
import { ExmanService } from './../../../../Services/exman.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-exams',
  templateUrl: './view-exams.component.html',
  styleUrls: ['./view-exams.component.css']
})
export class ViewExamsComponent implements OnInit {

  exams : any =[
  ]

  constructor(private exmanService:ExmanService){}

  ngOnInit():void{
    this.exmanService.listExams().subscribe(
      (data:any) => {
        this.exams = data;
        console.log(this.exams);
      },
      error => {
        console.log(error);
        Swal.fire('Error', 'Error when loading the exam','error');
      }
    )
  }

  deleteExam(examId:any){
    Swal.fire({
      title:'Delete exam',
      text:'Are you sure you want to delete this exam?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText:'Cancel'
    }).then((result)=>{
      this.exmanService.deleteExam(examId).subscribe(
        (data)=>{
          this.exams = this.exams.filter((exam:any) => exam.examId != examId);
          Swal.fire('Delete exam', 'The exam has been deleted', 'success');
        },
        error => {
          Swal.fire('Error', 'Error deleting exam', 'error');
        }
      )
    })
  }

}
