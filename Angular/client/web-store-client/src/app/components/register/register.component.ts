import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  products: Product[];
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

  errorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  errorPassword() {
    return this.password.hasError('required') ? 'This field is required' :
      this.password.hasError('minlength') ? 'Password must be at least 8 characters long' : '';
  }

  errorFirstName() {
    return this.firstName.hasError('required') ? 'This field is required' : '';
  }

  errorLastName() {
    return this.lastName.hasError('required') ? 'This field is required' : '';
  }

  userRegister() {
    console.log(this.email.value, this.password.value, this.firstName.value, this.lastName.value);
    let user: User = {
      email: this.email.value,
      password: this.password.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value
    }
    this.userService.registerUser(user).subscribe(recivedUser => {
      let logedInUser = recivedUser;
      console.log(logedInUser);

    }
    )
  }
}

