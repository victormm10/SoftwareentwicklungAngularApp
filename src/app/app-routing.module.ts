import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Softwareentwicklung',
    loadChildren: () => import('./Products/products.module').then( m => m.ProductsModule)
  },
  {
    path: '**',
    redirectTo: 'Softwareentwicklung'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
