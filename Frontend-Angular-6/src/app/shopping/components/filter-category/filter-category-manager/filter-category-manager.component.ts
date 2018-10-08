import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../shared/services/category.service';

@Component({
  selector: 'app-filter-category-manager',
  templateUrl: './filter-category-manager.component.html',
  styleUrls: ['./filter-category-manager.component.css']
})
export class FilterCategoryManagerComponent implements OnInit {
  categorys: any;
  cartid: number;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _categoryService: CategoryService,
  ) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.cartid = params['id'];

    });
  }

  ngOnInit() {
    this._categoryService.getcategory().subscribe(category => {
      console.log(category);
      this.categorys = category;
    });

  }
}
