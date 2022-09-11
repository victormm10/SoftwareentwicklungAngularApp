import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductItem } from '../Interfaces/ProductItem.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _urlBaseApi: string = environment.baseUrlApi;
  constructor(private http: HttpClient) { }

  getProductList(): Observable<ProductItem[]>
  {
    return this.http.get<ProductItem[]>(`${this._urlBaseApi}/Products/GetProductList`);
  }

  checkIfProductNameIsAvailable( productName: string ): Observable<boolean>{
    return this.http.get<boolean>(`${this._urlBaseApi}/Products/CheckIfProductExists/${ productName }`);
  }

  saveNewProduct( item: ProductItem ):Observable<ProductItem>{
    return this.http.post<ProductItem>(`${this._urlBaseApi}/Products/SaveProductItem`, item);
  }

  updateProduct( item: ProductItem ):Observable<ProductItem>{
    return this.http.put<ProductItem>(`${this._urlBaseApi}/Products/UpdateProductItem`, item);
  }

  getProductById( id: number ): Observable<ProductItem>
  {
    return this.http.get<ProductItem>(`${this._urlBaseApi}/Products/GetProductById/${ id }`);
  }
}
