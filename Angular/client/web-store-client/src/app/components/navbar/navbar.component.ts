import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Logout } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isLoggedIn, isLoggedOut } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );
    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
  }

  logout(){
    this.store.dispatch(new Logout());
  }

}
