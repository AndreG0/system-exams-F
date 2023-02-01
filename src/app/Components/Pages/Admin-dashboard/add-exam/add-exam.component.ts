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

  constructor(private categoryService:CategoryService){}

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

}
