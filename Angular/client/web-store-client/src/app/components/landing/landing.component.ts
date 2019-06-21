import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from 'src/app/store/selectors/auth.selector';

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

  
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private _formBuilder: FormBuilder, private store: Store<AppState>) { }

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
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );
    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
  }
  
  userRegister(){
    let user = this._formBuilder.group;
    //console.log(this.firstNameFormGroup.value.firstNameCtrl, this.lastNameFormGroup.value.lastNameCtrl, this.emailFormGroup.value.emailCtrl, this.passwordFormGroup.value.passwordCtrl)
  }

}
