import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-product-details]',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input('app-product-details') productDetails;
  objectKeys;
  objectValues;
  constructor() { }

  ngOnInit() {
    this.objectKeys = Object.keys(this.productDetails);
    this.objectValues = Object.values(this.productDetails);
  }

}
