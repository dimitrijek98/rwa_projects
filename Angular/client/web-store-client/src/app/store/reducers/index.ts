import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import authReducer, { AuthState } from './auth.reducer';
import { ProductsState, productsReducers } from './product.reducer';


export interface AppState {
  auth: AuthState,
  products: ProductsState
}

export const rootReducer:ActionReducerMap<AppState> = {
  auth: authReducer,
  products: productsReducers
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
