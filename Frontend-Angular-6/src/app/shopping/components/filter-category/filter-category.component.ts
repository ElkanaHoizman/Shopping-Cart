import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit {
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
