import  Swal  from 'sweetalert2';
import { CategoryService } from './../../../../Services/category.service';
import { ExmanService } from './../../../../Services/exman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private exmanService:ExmanService,
    private categoryService:CategoryService,
    private router:Router
    ){}

  examId = 0;
  exam:any;
  categories: any;

  ngOnInit(): void{
    this.examId = this.route.snapshot.params['examId'];
   this.exmanService.getExam(this.examId).subscribe(
    (data:any) => {
      this.exam = data;
      console.log(this.exam);
    },
    error =>{
      console.log(error);
    }
   )
   this.categoryService.listCategories().subscribe(
    (data:any) => {
      this.categories = data;
    },
    error =>{
      alert('error loading categories');
    }
    )
  }

  public updateExam(){
   this.exmanService.updateExam(this.exam).subscribe(
    data =>{
      Swal.fire('Update Exam', 'The exam has been updated successfully','success').then(
        (e) =>{
          this.router.navigate(['/admin/exams']);
        }
      );
    },
    error =>{
      Swal.fire('Error', 'Error when updating the exam','error');
      console.log(error);
    }
    )
  }

}
