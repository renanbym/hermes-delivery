import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductModule } from '../components/product/product.modules';
import { RouterModule } from '@angular/router';
import { ProductSideNavComponent } from './product/product.component';
import { SideNavOverviewComponent } from './sidenavoverview.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

 
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    ProductModule.forRoot(),
  ],
  declarations: [ProductSideNavComponent, SideNavOverviewComponent],
  exports: [ProductSideNavComponent, SideNavOverviewComponent]
})
export class SideNavModule { 
  static forRoot(): ModuleWithProviders<SideNavModule> {
    return {
      ngModule: SideNavModule,
      providers: []
    }
  }
}
 