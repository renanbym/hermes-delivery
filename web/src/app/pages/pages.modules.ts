import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products/products.component';
import { ProductPageComponent } from './product/product.component';
import { ProductComponent } from '../components/product/product.component';
import { ProductModule } from '../components/product/product.modules';

 
@NgModule({
  imports: [
    CommonModule,
    ProductModule.forRoot(),
  ],
  declarations: [ProductsPageComponent, ProductPageComponent],
  exports: [ProductsPageComponent, ProductPageComponent]
})
export class PagesModule { 
  static forRoot(): ModuleWithProviders<PagesModule> {
    return {
      ngModule: PagesModule,
      providers: []
    }
  }
}
 