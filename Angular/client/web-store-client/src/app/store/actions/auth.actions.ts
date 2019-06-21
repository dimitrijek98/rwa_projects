import { Action } from '@ngrx/store';
import { User } from '../../models/User';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
  LoginSuccessAction = '[LoginSuccess] Action',
  LoginFailAction = '[LoginFail] Action',

}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public email: string, public password: string) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccessAction;
  constructor(public user: User) { }
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFailAction;
}


export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout | LoginSuccess | LoginFail;
