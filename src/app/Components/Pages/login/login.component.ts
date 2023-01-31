import { Router } from '@angular/router';
import { LogService } from './../../../Services/log.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginData = {
    "username": '',
    "password": ''
  }
  constructor(private snack:MatSnackBar, private logService:LogService, private router:Router){}

  ngOnInit(): void {

  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
        this.snack.open('The username is required!!', 'Accept',{
          duration: 3000
        })
        return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('The password is required!!', 'Accept',{
        duration: 3000
      })
      return;
    }
    this.logService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);

        this.logService.loginUser(data.token);
        this.logService.getCurrentUser().subscribe((user:any) => {
          this.logService.setUser(user);
          console.log(user);
          if(this.logService.getUserRole()== "ADMIN"){
            //ADMIN
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.logService.loginStatusSubjec.next(true);
          }
          else if(this.logService.getUserRole() == "USER"){
            //USER
            //window.location.href = '/user';
            this.router.navigate(['user']);
            this.logService.loginStatusSubjec.next(true);
          }
          else{
            this.logService.logout();
          }

        })
      },
      (error) => {
        console.log(error);
        this.snack.open('invalid credentials, try again','Aceptar',{
          duration:3000
        })
      }
    )
  }

}
