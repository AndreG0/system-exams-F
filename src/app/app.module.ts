import { AuthInterceptorProviders } from './Services/auth.interceptor';

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './Components/Pages/Admin-dashboard/admin/admin.component';
import { UserComponent } from './Components/Pages/user/user.component';
import { ProfileComponent } from './Components/Pages/profile/profile.component';
import { SidebarComponent } from './Components/Pages/Admin-dashboard/sidebar/sidebar.component';
import { WelcomeComponent } from './Components/Pages/Admin-dashboard/welcome/welcome.component';
import { ViewCategoriesComponent } from './Components/Pages/Admin-dashboard/view-categories/view-categories.component';
import { AddCategoryComponent } from './Components/Pages/Admin-dashboard/add-category/add-category.component';
import { ViewExamsComponent } from './Components/Pages/Admin-dashboard/view-exams/view-exams.component';
import { AddExamComponent } from './Components/Pages/Admin-dashboard/add-exam/add-exam.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewExamsComponent,
    AddExamComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatSelectModule

  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
