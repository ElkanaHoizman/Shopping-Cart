import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  prodcut = {
    name : '',
    category: '',
    price: '',
    imageurl: ''
  };
id: number;
  categorys: any;
  item: any;

  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
   }

  ngOnInit() {
      this._categoryService.getcategory().subscribe(category => {
      console.log(category);
      this.categorys = category ;
        });
        this.getproductS();
  }
  send(data) {
    this.id = this._route.snapshot.params.id;
    // console.log(data);
    // alert(this.id);
    this._productService.put(this.id , data).subscribe(s => {
      this._router.navigate(['/']);
    });
  }
  getproductS() {
    this.id = this._route.snapshot.params.id;
    this._productService.get_sinle(this.id).subscribe(item => {
      this.item = item;
      this.prodcut.name = this.item.data[0].productname;
      this.prodcut.price = this.item.data[0].price;
      this.prodcut.imageurl = this.item.data[0].imageurl;
      console.log(this.item);
    });
  }
}
