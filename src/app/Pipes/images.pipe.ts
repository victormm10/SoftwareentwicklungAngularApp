import { Pipe, PipeTransform } from '@angular/core';
import { ProductItem } from '../Products/Interfaces/ProductItem.interface';

@Pipe({
    name: 'images'
})

export class ImagesPipe implements PipeTransform {

    transform(value: ProductItem): string {
  
      if( !value.Id && !value.ImageUrl )
        return 'assets/images/no-product.png';
      else if ( value.ImageUrl )
        return value.ImageUrl;
      else    
        return `assets/images/no-product.png`;
    }
  
  }