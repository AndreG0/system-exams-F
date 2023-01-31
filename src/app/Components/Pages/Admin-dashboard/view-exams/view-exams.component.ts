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

}
