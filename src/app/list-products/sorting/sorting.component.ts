import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  @Output() selectedFilter = new EventEmitter();
  sku = true;
  constructor() { }
  sortingFeatires = {
    options: ['Price Low To High', "Price High To Low", "Sort With Title"],
    selectedValue: null
  }
  ngOnInit() {
  }

  filterChanged = (data) => {
    this.sortingFeatires.selectedValue = data;
    this.selectedFilter.emit(this.sortingFeatires);
  }
  onFilterSelect = () => {
    
  }
}
