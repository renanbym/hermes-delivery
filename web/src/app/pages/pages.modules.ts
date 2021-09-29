import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products/products.component';
import { ProductModule } from '../components/product/product.modules';
import { RouterModule } from '@angular/router';

 
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductModule.forRoot(),
  ],
  declarations: [ProductsPageComponent],
  exports: [ProductsPageComponent]
})
export class PagesModule { 
  static forRoot(): ModuleWithProviders<PagesModule> {
    return {
      ngModule: PagesModule,
      providers: []
    }
  }
}
 