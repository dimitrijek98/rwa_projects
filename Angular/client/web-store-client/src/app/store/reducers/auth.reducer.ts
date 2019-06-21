import { User } from '../../models/User';
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';

export interface AuthState {
    isFailed: boolean,
    loggedIn: boolean,
    user: User
}

const initialAuthState: AuthState = {
    isFailed: false,
    loggedIn: false,
    user: undefined
}

export default function authReducer(state: AuthState = initialAuthState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LoginSuccessAction:
            {
                return {
                    isFailed:false,
                    loggedIn: true,
                    user: action.user
                }
            }
        case AuthActionTypes.LoginFailAction:
            {
                return {
                    isFailed: true,
                    loggedIn: true,
                    user:undefined
                }
            }
        case AuthActionTypes.LogoutAction:
            {
                return {
                    isFailed: false,
                    loggedIn: false,
                    user: undefined
                }
            }
        default:
            return state;
    }
}