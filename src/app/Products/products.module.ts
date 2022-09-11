import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './Pages/list/list.component';
import { AddComponent } from './Pages/add/add.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ImagesPipe } from '../Pipes/images.pipe';
import { MaterialModule } from '../material/material.module';
import { GridColorDirective } from '../Directives/grid-color.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgDirective } from '../Directives/error-msg.directive';
import { DeleteComponent } from './Components/Confirm/delete/delete.component';
import { ViewComponent } from './Components/view/view.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ImagesPipe,
    GridColorDirective,
    ErrorMsgDirective,
    DeleteComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
