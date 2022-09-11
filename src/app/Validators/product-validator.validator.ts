
import { AsyncValidator   } from "fluentvalidation-ts";

import { ProductItem } from '../Products/Interfaces/ProductItem.interface';
import { ProductService } from '../Products/Services/product.service';



export class ProductValidator extends AsyncValidator<ProductItem> {
    constructor( private productService: ProductService ) {
        super();
  
        //Id
        this.ruleFor('Id')
            .notNull()
            .withMessage('Product Id is missing');
        this.ruleFor('Id')
            .greaterThanOrEqualTo(0)
            .withMessage('Product Id should not be negative');


        //name
        this.ruleFor('Name')
            .notNull()
            .withMessage('Please enter the product name');
        this.ruleFor('Name')
            .notEmpty()
            .withMessage('Please enter the product name');
        this.ruleFor('Name')
            .maxLength(50)
            .withMessage('Product name must be 50 characters length max');
        this.ruleFor('Name')
            .mustAsync(async (Name) => {
                if(Name == '')
                    Name = 'a';

                return await this.productService.checkIfProductNameIsAvailable(Name)
                .toPromise().then( r => { return !r; } );
            })
            .withMessage('This product name is already taken')
            .when( model => model.Id == 0 );
    
        
        //price
        this.ruleFor('Price')
            .greaterThanOrEqualTo(0)
            .withMessage('Price cannot be negative');
        this.ruleFor('Price')
            .notNull()
            .withMessage('Price cannot be empty');
        this.ruleFor('Price')
            .scalePrecision(2,18)
            .withMessage('Price must be two decimals long');

        //stock
        this.ruleFor('Stock')
            .notNull()
            .withMessage('Stock cannot be empty');
        this.ruleFor('Stock')
            .greaterThanOrEqualTo(0)
            .withMessage('Stock cannot be negative');
        this.ruleFor('Stock')
            .scalePrecision(2,18)
            .withMessage('Stock must be two decimals long');

        //imageUrl
        this.ruleFor('ImageUrl')
            .maxLength(250)
            .withMessage('Product image link must be 250 characters length max');

        //description
        this.ruleFor('Description')
            .maxLength(250)
            .withMessage('Product description must be 250 characters length max');
    }
  }