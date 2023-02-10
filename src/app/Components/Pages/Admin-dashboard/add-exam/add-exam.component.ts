import { Router } from '@angular/router';
import { ExmanService } from './../../../../Services/exman.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal  from 'sweetalert2';
import { CategoryService } from './../../../../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

categories: any =[];

examData = {
  title: '',
  description: '',
  maximumPoints:'',
  numberQuestions: '',
  active: true,
  category:{
    categoryId:''
  }
};

  constructor(
    private categoryService:CategoryService,
    private snack:MatSnackBar,
    private exmanService:ExmanService,
    private router:Router
    ){}

  ngOnInit():void{
    this.categoryService.listCategories().subscribe(
      (data:any) =>{
        this.categories = data;
        console.log(this.categories);
      },
      error =>{
        console.log(error);
        Swal.fire('Error !!', 'Error when loading the categories','error')
      }
    )
  }

  saveExam(){
    console.log(this.examData);
    if(this.examData.title.trim() == '' || this.examData.title == null){
      this.snack.open('The title is required', '',{
        duration: 3000
      });
      return;
    }

    this.exmanService.saveExam(this.examData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Save exam', 'The exam has been saved successfully', 'success');
        this.examData = {
          title : '',
          description : '',
          maximumPoints: '',
          numberQuestions: '',
          active: true,
          category:{
            categoryId: ''
          }
        }
        this.router.navigate(['/admin/exams'])
      },
      (error) => {
        Swal.fire('Error','Error when saving the exam','error');
      }
    )
  }
}
