import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ProductItem } from '../../Interfaces/ProductItem.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    img{
      height: 80px;
      width: 80px;
      border-radius: 50%;
      box-shadow: 3px 3px 3px #9ea2a2;
      border: solid 1px #a8a5a5;
    }
  `]
})
export class ListComponent implements OnInit {

  productList: ProductItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.productService.getProductList().subscribe(
      list => {
        this.productList = list;
      }
    );
  }

}
