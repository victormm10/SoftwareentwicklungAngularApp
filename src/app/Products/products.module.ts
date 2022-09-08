import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './Pages/list/list.component';
import { AddComponent } from './Pages/add/add.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
