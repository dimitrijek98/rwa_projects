import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, AuthActionTypes, Logout, LoginSuccess, LoginFail } from '../actions/auth.actions';
import { tap, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';



@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    mergeMap(action =>
      this.userService.loginUser(action.email,action.password)
    ),
    map(user =>{
      if(user){
        return new LoginSuccess(user);
      }
      else{
        return new LoginFail()
      }
    })
  )

@Effect({ dispatch: false })
logaout$ = this.actions$.pipe(
  ofType<Logout>(AuthActionTypes.LogoutAction),
  tap(() => {
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  })
)

@Effect({ dispatch: false })
loginSuccess$ = this.actions$.pipe(
  ofType<LoginSuccess>(AuthActionTypes.LoginSuccessAction),
  tap((action) => {
    localStorage.setItem('user',JSON.stringify(action.user))
    this.router.navigateByUrl('');
  })
)

@Effect()
init$ = defer(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
    return of(new LoginSuccess(JSON.parse(userData)))
  }
  else {
    return of(new Logout())
  }
})

constructor(private actions$: Actions, private router: Router, private userService: UserService) { }

}
