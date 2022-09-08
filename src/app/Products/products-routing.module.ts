import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Pages/list/list.component';
import { AddComponent } from './Pages/add/add.component';

const routes: Routes = [
  {
    path: 'Products',
    children: [
      {
        path: 'List',
        component: ListComponent
      },
      {
        path: 'Add',
        component: AddComponent
      },
      {
        path: 'Edit/:id',
        component: AddComponent
      },
      {
        path: '**',
        redirectTo: 'List'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'Products'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
