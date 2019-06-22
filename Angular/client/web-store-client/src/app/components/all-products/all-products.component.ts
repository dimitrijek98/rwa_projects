import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RequestAllProducts } from 'src/app/store/actions/product.actions';
import { selectAllProducts } from 'src/app/store/selectors/product.selector';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new RequestAllProducts());
    const products$ = this.store.pipe(
      select(selectAllProducts)
    );
  }

}
