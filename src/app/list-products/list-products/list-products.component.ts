import { Component, OnInit } from '@angular/core';
import { listProductsService } from '../listProducts.service';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  searchTerm: string = "";
  productsList: BehaviorSubject<any> | null = null;
  updateProductListWithSort;
  allProducts;
  constructor(private listProductsService: listProductsService, private router: Router, private utility: UtilityService) { }

  ngOnInit() {
    this.productsList = new BehaviorSubject([]);
      this.listProductsService.getJSON().subscribe(response => {
        this.productsList.next(response);
        this.allProducts = response;
      });
  };

  
  debounceThisFunction = (fun, wait) => {
    let currentCall = null;
    return function (arg) {
      const args = arguments;
      const context = this;
      clearTimeout(currentCall);
      currentCall = setTimeout(function () {
        fun.apply(context, args);
      }, wait);
    }
  };

  updateProductList = this.debounceThisFunction((searchTerm) => {
    if (searchTerm) this.productsList.next(this.allProducts.filter(product => product['title'].toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ));
    else this.productsList.next(this.allProducts);
  }, 500);

  onSearchTermChange = () => {
    this.updateProductList(this.searchTerm);
  };

  updateListWithSorting = (data) => {
    if(data.selectedValue === "Sort With Title") this.productsList.next(this.productsList.getValue().sort(this.utility.sortArrayOfObjectOnStringKeyAsc('title')));
    else if(data.selectedValue === 'Price Low To High') {
      this.productsList.next(this.productsList.getValue().sort(this.utility.sortArrayOfObjectOnFloatKeyAsc('price')));
    } else if (data.selectedValue ==='Price High To Low') {
      this.productsList.next(this.productsList.getValue().sort(this.utility.sortArrayOfObjectOnFloatKeyDec('price')));
    }
  };

  logout() {
    localStorage.setItem('loggedIn', 'false');
    this.router.navigate(['/']);
  }

}
