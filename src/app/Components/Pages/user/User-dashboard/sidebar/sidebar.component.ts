import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../../../../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories:any;

  constructor(
    private categoryService:CategoryService,
    private snack:MatSnackBar,

    ){}


  ngOnInit():void{
    this.categoryService.listCategories().subscribe(
      (data:any) =>{
        this.categories = data;
      },
      error =>{
        this.snack.open('Error loading categories', '',{
          duration: 3000
        })
        console.log(error);
      }
    )
  }

}
