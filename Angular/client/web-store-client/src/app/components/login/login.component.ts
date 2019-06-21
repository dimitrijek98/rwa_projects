import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  errorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  errorPassword() {
    return this.password.hasError('required') ? 'This field is required' :
        this.password.hasError('minlength') ? 'Password must be at least 8 characters long' : '';
  }

  userLogin(){
    let user: User = {
      email : this.email.value,
      password: this.password.value
    }
    this.userService.loginUser(user).subscribe(recivedUser =>{
      let logedInUser = recivedUser as User;
      console.log(logedInUser);

    }
    )
  }
}
