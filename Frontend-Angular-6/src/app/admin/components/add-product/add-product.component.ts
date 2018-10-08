import { Component, OnInit } from '@angular/core';
// import { query } from '@angular/core/src/render3/query';
// import { ActivatedRoute } from '@angular/router';
import { CategoryService} from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prodcut = {
    name,
    category: '',
    price: '',
    imageurl: ''
  };

  categorys: any;


  constructor(
    private _categoryService: CategoryService,
     private _productService: ProductService,
    private _router: Router
    ) {
console.log(this.prodcut.name);
    }

  ngOnInit() {
    this._categoryService.getcategory().subscribe(category => {
      console.log(category);
      this.categorys = category ;
        });

  }
  send(data) {
    console.log(data);
    this._productService.Add(data).subscribe(s => {
      this._router.navigate(['/']);
    });
  }
}
