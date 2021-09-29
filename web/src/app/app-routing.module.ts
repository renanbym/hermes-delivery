import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsPageComponent } from './pages/products/products.component';
import { ProductSideNavComponent } from './sidenav/product/product.component';
import { SideNavOverviewComponent } from './sidenav/sidenavoverview.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/:id', component: SideNavOverviewComponent, outlet: 'sidebar', children: [
    {
      path: 'detail',
      component: ProductSideNavComponent
     },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 