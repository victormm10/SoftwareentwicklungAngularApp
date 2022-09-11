import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { ValidatorsService } from '../../Services/validators.service';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius:15px;
    }

    a.nav-link.active{
      cursor: pointer;
    }
  `]
})
export class AddComponent implements OnInit {

  productValidation!: any;

  productForm: FormGroup = this.fb.group({
    Id          : [0],
    Name        : [],
    Price       : [],
    Stock       : [],
    ImageUrl    : [],
    Description : []
  });

  constructor( 
      private fb: FormBuilder, private validatorService: ValidatorsService, private productService: ProductService,
      private router: Router, private activatedRouter: ActivatedRoute , private snackBar: MatSnackBar 
    ) 
  { }

  ngOnInit(): void {
    if(!this.router.url.includes('Edit'))
      return;

    this.activatedRouter.params
      .pipe(
        switchMap( ({ id }) => this.productService.getProductById( id ) )
      )
      .subscribe( prod => {
          this.productForm = this.fb.group({
            Id          : [ prod.Id ],
            Name        : [ prod.Name ],
            Price       : [ prod.Price ],
            Stock       : [ prod.Stock ],
            ImageUrl    : [ prod.ImageUrl ],
            Description : [ prod.Description ]
          });
      } );
  }

  async addProduct(){

    this.productValidation = await this.validatorService.validateProdutItem( this.productForm.value );
    const productFormHasErrors = Object.getOwnPropertyNames(this.productValidation).length > 0;

    if(!productFormHasErrors){
      //Save product changes
      if( this.productForm.get('Id')?.value > 0 ){
        this.productService.updateProduct( this.productForm.value )
        .subscribe( element => {
          this.mostrarSnakBar('Your product has been updated');
          this.router.navigate([ '/Softwareentwicklung/Products/Edit', this.productForm.get('Id')?.value ]);
        });
      }
      //Save new product
      else{
        this.productService.saveNewProduct( this.productForm.value )
        .subscribe( element => {
          this.mostrarSnakBar('Your product has been saved');
          this.router.navigate([ '/Softwareentwicklung/Products/Edit', element.Id ]);
        });
      }
    }
    
  }

  formHasErrors( parameter: string ){
    if(this.productValidation)
      return this.productValidation[parameter];

    return '';
  }

  mostrarSnakBar( mensaje: string ){
    this.snackBar.open( mensaje, 'Ok!', {
      duration: 2500
    } );
  }

}
