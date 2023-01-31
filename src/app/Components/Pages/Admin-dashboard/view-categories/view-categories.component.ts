import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories = [
    {
      categoryId :1,
      title : 'Programming languages',
      description: 'This is a category test'
    },
    {
      categoryId :2,
      title : 'Programming languages',
      description: 'This is a category test'
    },
    {
      categoryId :3,
      title : 'Programming languages',
      description: 'This is a categoryl test'
    },
    {
      categoryId :4,
      title : 'Programming languages',
      description: 'This is a category test'
    },
  ]

  constructor(){}

  ngOnInit(): void {

  }
}
