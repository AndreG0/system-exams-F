import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../../../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = {
    title : '',
    description : ''
  }

  constructor(private categoryService: CategoryService, private snack:MatSnackBar, private router:Router){}

  ngOnInit():void{}

  formSubmit(){
     if(this.category.title.trim() == '' || this.category.title == null){
      this.snack.open("The title is required!!", '',{
        duration: 3000
      })
      return;
     }
     this.categoryService.saveCategory(this.category).subscribe(
      (data:any) =>{
        this.category.title ='',
        this.category.description='',
        Swal.fire('Add category','This category has been successfully', 'success');
        this.router.navigate(['/admin/categories']);
      },
      error =>{
        console.log(error);
        Swal.fire('Error!!', 'Error when saving category!!', 'error');
      }
     )
  }
}
