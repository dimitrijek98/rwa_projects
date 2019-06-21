import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  firstNameFormGroup: FormGroup;
  lastNameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstNameFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required]
    });
    this.lastNameFormGroup = this._formBuilder.group({
      lastNameCtrl: ['', Validators.required]
    });
    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['',Validators.compose([Validators.required, Validators.email])]
    });
    this.passwordFormGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }
  
  userRegister(){
    console.log(this.firstNameFormGroup.value.firstNameCtrl, this.lastNameFormGroup.value.lastNameCtrl, this.emailFormGroup.value.emailCtrl, this.passwordFormGroup.value.passwordCtrl)
  }

}
