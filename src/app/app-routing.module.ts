import { StartComponent } from './Components/Pages/user/User-dashboard/start/start.component';
import { InstructionsComponent } from './Components/Pages/user/User-dashboard/instructions/instructions.component';
import { LoadExamComponent } from './Components/Pages/user/User-dashboard/load-exam/load-exam.component';
import { ViewExamQuestionsComponent } from './Components/Pages/Admin-dashboard/view-exam-questions/view-exam-questions.component';
import { UpdateExamComponent } from './Components/Pages/Admin-dashboard/update-exam/update-exam.component';
import { AddExamComponent } from './Components/Pages/Admin-dashboard/add-exam/add-exam.component';
import { ViewExamsComponent } from './Components/Pages/Admin-dashboard/view-exams/view-exams.component';
import { AddCategoryComponent } from './Components/Pages/Admin-dashboard/add-category/add-category.component';
import { ViewCategoriesComponent } from './Components/Pages/Admin-dashboard/view-categories/view-categories.component';
import { AdminGuard } from './Services/admin.guard';
import { NormalGuard } from './Services/normal.guard';
import { UserComponent } from './Components/Pages/user/user.component';
import { AdminComponent } from './Components/Pages/Admin-dashboard/admin/admin.component';

import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/Pages/signup/signup.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { ProfileComponent } from './Components/Pages/profile/profile.component';
import { WelcomeComponent } from './Components/Pages/Admin-dashboard/welcome/welcome.component';
import { AddQuestionComponent } from './Components/Pages/Admin-dashboard/add-question/add-question.component';
import { UpdateQuestionComponent } from './Components/Pages/Admin-dashboard/update-question/update-question.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'register', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: '', component:LoginComponent},
  {path:"start/:examId", component:StartComponent,canActivate:[NormalGuard] },

  {path: 'admin', component:AdminComponent, canActivate:[AdminGuard],
   children: [ {path:'profile', component:ProfileComponent},
               {path: 'welcome', component:WelcomeComponent},
               {path: 'categories', component:ViewCategoriesComponent},
               {path: 'add-category', component:AddCategoryComponent},
               {path: 'exams', component:ViewExamsComponent},
               {path: 'add-exam', component:AddExamComponent},
               {path: 'exam/:examId', component:UpdateExamComponent},
               {path: 'view-questions/:examId/:title', component:ViewExamQuestionsComponent},
               {path: 'add-question/:examId/:title', component:AddQuestionComponent},
               {path: 'question/:questionId', component:UpdateQuestionComponent},
             ]},

  {path: 'user', component:UserComponent, canActivate:[NormalGuard],
   children:[  {path:':categoryId', component:LoadExamComponent},
                {path:'instructions/:examId', component:InstructionsComponent},

            ]},





 {path:'**',redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
