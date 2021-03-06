import { NgModule, ModuleWithProviders } from '@angular/core';

import { ProductComponent } from './product.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

 
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule { 
  static forRoot(): ModuleWithProviders<ProductModule> {
    return {
      ngModule: ProductModule,
      providers: []
    }
  }
}
 