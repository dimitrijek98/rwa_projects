import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import authReducer, { AuthState } from './auth.reducer';


export interface AppState {
  auth: AuthState,
}

export const rootReducer:ActionReducerMap<AppState> = {
  auth: authReducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
