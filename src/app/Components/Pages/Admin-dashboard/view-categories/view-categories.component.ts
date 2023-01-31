import Swal  from 'sweetalert2';
import { CategoryService } from './../../../../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories: any =[

  ]

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
    this.categoryService.listCategories().subscribe(
     ( data:any) =>{
      this.categories = data;
      console.log(this.categories);
     },
     error => {
      console.log(error);
      Swal.fire('Error!','error when loading the categories', 'error');
     }
    )
  }
}
