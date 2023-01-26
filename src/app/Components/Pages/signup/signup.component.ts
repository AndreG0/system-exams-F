import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public user = {
    username : '',
    password : '',
    name : '',
    lastname : '',
    email : '',
    number : ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null ||
      this.user.password == '' || this.user.password == null ||
      this.user.name == '' || this.user.name == null ||
      this.user.lastname == '' || this.user.lastname == null ||
      this.user.email == '' || this.user.email == null ||
      this.user.number == '' || this.user.number == null){

      this.snack.open('The name is required!', 'Accept',{
      duration: 3000,
      verticalPosition:'top',
      horizontalPosition:'right'
     });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      data => {
        console.log(data);
        Swal.fire('saved user', 'Successful registration!', 'success');
      },
      err => {
        console.log(err);
        this.snack.open('System error!', 'Accept',{
          duration: 3000,
          verticalPosition:'top',
          horizontalPosition:'right'
         });
      }
    )
  }

}
