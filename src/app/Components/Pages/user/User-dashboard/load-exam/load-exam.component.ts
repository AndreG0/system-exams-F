import { ExmanService } from './../../../../../Services/exman.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-exam',
  templateUrl: './load-exam.component.html',
  styleUrls: ['./load-exam.component.css']
})
export class LoadExamComponent implements OnInit {


  categoryId:any;
  exams:any;

  constructor(
    private route:ActivatedRoute,
    private exmanService:ExmanService,
    ){}

  ngOnInit(): void{
    this.route.params.subscribe((params) => {
      this.categoryId = params['categoryId'];

      if(this.categoryId == 0){
        console.log("Loading all exams");
        this.exmanService.listExamActive().subscribe(
          data =>{
            this.exams = data;
            console.log(this.exams);
          },
          error =>{
            console.log(error);
          }
        )
      }
      else{
        console.log("Loading an exam on specific");
        this.exmanService.listExamActiveByCategory(this.categoryId).subscribe(
          (data:any) =>{
          this.exams = data;
              console.log(this.exams);
          },
          error =>{
            console.log(error);
          }
        )
      }
    })

  }


}
