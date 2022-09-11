import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ProductValidator } from 'src/app/Validators/product-validator.validator';
import { ProductItem } from '../Interfaces/ProductItem.interface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  private _productValidator: ProductValidator;

  constructor( private productService: ProductService) {
    this._productValidator = new ProductValidator( productService );
   }

  async validateProdutItem( item: ProductItem ){
    let result: any;

    await this._productValidator
      .validateAsync(item)
      .then( valid => {
        result = valid;
      });

    return result;
 }
}
